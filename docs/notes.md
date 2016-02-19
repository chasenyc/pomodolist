## Schema

### Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

### Todos
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
estimate        | integer   | not null
total           | integer   | not null, default 0
completed       | boolean   | not null, default false



Great notification sample:
```
// function for creating the notification
 function createNotification(title) {

   // Let's check if the browser supports notifications
   if (!"Notification" in window) {
     console.log("This browser does not support notifications.");
   }

   // Let's check if the user is okay to get some notification
   else if (Notification.permission === "granted") {
     // If it's okay let's create a notification

     var img = '/to-do-notifications/img/icon-128.png';
     var text = 'HEY! Your task "' + title + '" is now overdue.';
     var notification = new Notification('To do list', { body: text, icon: img });

     window.navigator.vibrate(500);
   }

   // Otherwise, we need to ask the user for permission
   // Note, Chrome does not implement the permission static property
   // So we have to check for NOT 'denied' instead of 'default'
   else if (Notification.permission !== 'denied') {
     Notification.requestPermission(function (permission) {

       // Whatever the user answers, we make sure Chrome stores the information
       if(!('permission' in Notification)) {
         Notification.permission = permission;
       }

       // If the user is okay, let's create a notification
       if (permission === "granted") {
         var img = '/to-do-notifications/img/icon-128.png';
         var text = 'HEY! Your task "' + title + '" is now overdue.';
         var notification = new Notification('To do list', { body: text, icon: img });

         window.navigator.vibrate(500);
       }
     });
   }
```
