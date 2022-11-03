
// Your web app's Firebase configuration
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
      // Initialize Firebase
      
      firebase.initializeApp(firebaseConfig);
      
        const auth = firebase.auth();
        
 
        
        function signUp(){
            
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            
            alert("Signed Up");
        }
        
        
        
        function signIn(){
            
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.signInWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            
            
            
            
        }
        
        
        function signOut(){
            
            auth.signOut();
            alert("Signed Out");
            
        }
        
        
        
        auth.onAuthStateChanged(function(user){
            
            if(user){
                
                var email = user.email;
                alert("Active User " + email);
                
                //Take user to a different or home page
                document.location.href="../index.html";
    
                //is signed in
                
            }else{
                
                alert("No Active User");
                //no user is signed in
            }
            
            ㄅ
            
        }
        );
   ㄆ