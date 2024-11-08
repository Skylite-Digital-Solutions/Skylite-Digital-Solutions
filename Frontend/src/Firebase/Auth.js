import { auth } from '../Firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Inside BlogPostForm component
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  });

  return () => unsubscribe();
}, []);
