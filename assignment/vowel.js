var vowel=(...str)=>{
    var count=0;
 var vowelcount=0;
 for(let i in str)
 {
     if(str[i]!=' ')
     {
         count+=1;
     }
     if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u')
     {
         vowelcount+=1;
     }
 }
 console.log('Number of letters are '+count);
 console.log('Number of vowels are '+vowelcount);
}
vowel(...'betty bought some butter');