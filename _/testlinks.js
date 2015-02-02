/* @ Stephen O'Connor */
// immediately invoked anonymous function
  (function() {
     
function linkListener() {
    alert(this.i);
}

function addLinks () {
    for(var i = 0; i < 5; ++i) {
        var link = document.createElement('a');
        link.appendChild(document.createTextNode('Link ' + i));
        link.i = i;
        link.onclick = linkListener;
        document.body.appendChild(link);
    }
}



         document.getElementById( 'user_list' ).addEventListener( 'click', function ( e )
         {
            console.log( e.toElement );
            if ( e.toElement.id === userId[j] )
            {
               console.log( 'yes' );
               var myWindow = window.open( "", "", "width=400, height=200" );
               myWindow.document.write( "Username: ", user.name + "<br />" +
                       "Job Title: ", user.jobTitle + "<br />" +
                       "Email Address: ", user.emailAdd );
               myWindow.document.title = "Users";
            }
            else
            {
               var myNoWindow = window.open( "", "", "width=40, height=20" );
               myNoWindow.document.write( "No" );
               console.log( 'no' );
            }
         }, false );
     
  }());