var arr1 =[ 1, 3, 5, 7, 9] ;
var arr2 = [2, 4, 6, 8,10];
var largestt;

function largest(arr1)
  {
     for( var i =0 ;i<arr1.length;i++)
       { 
        //   console.log(arr1[i]);

         if( arr1[0] < arr1[i] )
         {
           largestt= (arr1[i]);
         }
           
       }
  }
    largest(arr1);
    console.log(largestt);
