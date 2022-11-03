var firebaseConfig = 
    {
    apiKey: "AIzaSyB1KjKoL8CN2YJfYwJma9T2T-ChPZREjdQ",
    authDomain: "finalproject-9c09f.firebaseapp.com",
    projectId: "finalproject-9c09f",
    storageBucket: "finalproject-9c09f.appspot.com",
    messagingSenderId: "822131808687",
    appId: "1:822131808687:web:0a88a803a2581806a4775a",
    measurementId: "G-274HS4P79E"
    };

    firebase.initializeApp(firebaseConfig);
      
    const auth = firebase.auth();
    
    
    
    
    function signOut(){
        
        auth.signOut();
        alert("Signed Out");
        
    }
    
    
    
        
        
        
  