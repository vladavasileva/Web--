function  readNumber ( )  {
    let  num = 0 ;
      do  {
        num  =  prompt ( "Введите число:" ,  0 ) ;
      }  while  (  ! isFinite ( число )  ) ;
    
      if  ( num  ===  null  ||  num  ===  '' )  return  null ;
    
      return  + num ;
    }
  
    alert ( `Ваше число: ${ readNumber() }`);