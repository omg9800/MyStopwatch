
    var s=0;
    var m=0;
    var h=0;
    var t;
    var kk=0;
    
    function currentTime() {
       s=s+1;
      var date = new Date(); /* creating object of Date class */
      var hour = date.getHours();
      var min = date.getMinutes();
      var sec = date.getSeconds();
      // h = updateTime(h);
      // m = updateTime(m);
      // s = updateTime(s);
      if(s==61)
      {
           m=m+1;
           s=1;
      }
      if(m==61)
      {
         h=h+1;
         m=1;
      }

      document.getElementById("clock").innerHTML = h + " : " + m + " : " + s; /* adding time to the div */
      t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
    }

    function updateTime(k) {
      if (k < 10) {
        return "0" + k;
      }
      else {
        return k;
      }
    }

        currentTime();

       function myFunction1()
       {
         
         // h = updateTime(h);
         // m = updateTime(m);
         // s= updateTime(s);
         document.getElementById("clock").innerHTML =h + " : " + m + " : " + s;
          clearTimeout(t);
          kk=0;

       } 

       function myFunction2()
       {
         s=-1;
         h=0;
         m=0;
         if(kk==0)
         {
         t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
         kk=1;}
         
       }

       myFunction1();
       myFunction2();