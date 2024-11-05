// routes/contactRoutes.js
const express = require('express');
const Contact = require('../models/contact.js')
const router = express.Router();
const PDFDocument = require('pdfkit');
const ExcelJS = require('exceljs');


// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Create new contact document
    const newContact = new Contact({ name, email, subject, message });
    const savedContact = await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully', contact: savedContact });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

// Route to generate report in JSON format
router.get('/report/json', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Error generating JSON report' });
  }
});

// // Route to generate report in PDF format
// router.get('/report/pdf', async (req, res) => {
//   try {
//     const contacts = await Contact.find();

//     const doc = new PDFDocument();
//     res.setHeader('Content-Disposition', 'attachment; filename="contacts_report.pdf"');
//     res.setHeader('Content-Type', 'application/pdf');
//     doc.pipe(res);

//     doc.fontSize(18).text('Contacts Report', { align: 'center' });
//     doc.moveDown();

//     contacts.forEach((contact, index) => {
//       doc.fontSize(12).text(`Name: ${contact.name}`);
//       doc.text(`Email: ${contact.email}`);
//       doc.text(`Message: ${contact.message}`);
//       doc.text(`Created At: ${contact.createdAt.toDateString()}`);
//       doc.moveDown();
//     });

//     doc.end();
//   } catch (error) {
//     res.status(500).json({ error: 'Error generating PDF report' });
//   }
// });

// Route to generate report in Excel format
router.get('/report/excel', async (req, res) => {
  try {
    const contacts = await Contact.find();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Contacts');

    worksheet.columns = [
      { header: 'Name', key: 'name', width: 25 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Message', key: 'message', width: 50 },
      { header: 'Created At', key: 'createdAt', width: 20 },
    ];

    contacts.forEach((contact) => {
      worksheet.addRow({
        name: contact.name,
        email: contact.email,
        message: contact.message,
        createdAt: contact.createdAt.toDateString(),
      });
    });

    res.setHeader('Content-Disposition', 'attachment; filename="contacts_report.xlsx"');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    res.status(500).json({ error: 'Error generating Excel report' });
  }
});

module.exports = router;
