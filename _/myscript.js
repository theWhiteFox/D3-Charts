/**
 * myscript.js Business Card List with Pop-up
 * @ Stephen O'Connor, January 2015
 * 
 * Dependencies:
 * https://developers.google.com/speed/libraries/devguide#jquery
 * http://tristanedwards.me/sweetalert 
 * 
 */

// immediately invoked anonymous function
( function () {

   // jQuery AJAX call
   $.ajax( {
      url: '_/data.json',
      dataType: 'json',
      type: 'get',
      cache: false,
      success: function ( data )
      {
         // select and click for sweetalert pop-up
         document.querySelector( '#user_list' ).addEventListener( 'click', function ( e )
         {
            for ( var i = 0; i < data.users.length; i++ )
            {
               if ( e.target.id === data.users[i].id )
               {
                  swal(
                          "Details", "Name: " +
                          data.users[i].name +
                          "\n Company: " +
                          data.users[i].companyName +
                          "\nJob title: " +
                          data.users[i].jobTitle +
                          "\n Email: " +
                          data.users[i].emailAdd );
               }
            }
         }, false );

         // display links on page
         var output = "";
         $.each( data, function ( key, val )
         {
            for ( var i = 0; i < val.length; i++ )
            {
               var user = val[i];
               output +=
                       "<li><a id='" +
                       user.id +
                       "' href='#" +
                       user.id + 
                       "'>" +
                       "&Tilde;" +
                       user.username +
                       "</a></li>";
            }
            $( 'ul#user_list' ).append( output );
         } );
      }
   } );

   //  sort data in ascending and descending order
   $( document ).ready( function ()
   {
      $( '.link-sort-list' ).click( function ( e )
      {
         var $sort = this,
                 $list = $( '#user_list' ),
                 $listLi = $( 'li', $list );
         $listLi.sort( function ( a, b )
         {
            var keyA = $( a ).text(),
                    keyB = $( b ).text();
            if ( $( $sort ).hasClass( 'asc' ) )
            {
               return ( keyA > keyB ) ? 1 : 0;
            } else {
               return ( keyA < keyB ) ? 1 : 0;
            }
         } );
         $.each( $listLi, function ( index, row )
         {
            $list.append( row );
         } );
         e.preventDefault();
      } );
   } );
}() ); // end immediately invoked anonymous function

