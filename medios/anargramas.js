

function anagramFun( pal1,  pal2)
{
   res = false;
    if(pal1==pal2)
    {
    }else if(pal1 == "" || pal2 =="")
    {
    }else{
        for( i=0; i<pal1.length; i++)
            {
                letra1 =pal1[i];
                for( x=0; x<pal2.length; x++)
                {
                     letra2 = pal2[x];
                     if(letra1 === letra2)
                        {
                          pal1= pal1.replace(letra1, "");
                          pal2=pal2.replace(letra2, "");
                          i=0;
                          x=0; 
                          if(pal1 == pal2)
                            {
                              res = true;
                            }
                        } 
                 }
            
            }
         }

         if(res == true)
         {
            console.log( "Son anagramas");
        } else {
            console.log( " No son anagramas");
        }
}
 anagramFun("", "blcasaacna");

 