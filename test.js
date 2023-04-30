let language
let conversion_type ='encryption'
let transfer_amount=0
let char
let message=""
let out=""
let out_put =document.getElementById('out_put')
let en =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','`','~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','\\','|','[',']','{','}',';',':',',','<','.','>','/','?','"',"'",'0','1','2','3','4','5','6','7','8','9']
let fa =['ض','ص','ث','ق','ف','غ','ع','ه','خ','ح','ج','چ','ش','س','ی','ب','ل','ا','ت','ن','م','ک','گ','ظ','ط','ز','ژ','پ','ر','ذ','د','ئ','آ','ء','،','ؤ','ئ','ي','إ','أ','آ','ة','؛','و','`','~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','\\','|','[',']','{','}',';',':',',','<','.','>','/','?','"',"'",'0','1','2','3','4','5','6','7','8','9']


function change_type (){
    conversion_type =document.querySelector('.conversion_type').value
    if(conversion_type=="encryption"){
        document.getElementById('message').setAttribute('placeholder','Enter your message to encrypt')
    }else{
        document.getElementById('message').setAttribute('placeholder','Enter your message to decode')
    }
}


function convert(){
    message=document.getElementById('message').value
    transfer_amount =Number(document.getElementById('Transfer').value)
    language =document.querySelector('.language').value

    if(conversion_type=="encryption"){
        Convert_message_to_code()
    }else{
        Convert_password_to_message()
    }
}


function Convert_message_to_code(){
    for (let i=0;i<message.length;i++){
        char=message.charAt(i)
        if(char==' '){
            out+=char
        }else{
            if(language=='en'){
                let index_1=en.indexOf(char)
                index_1+=transfer_amount
                index_1=index_1%94
                out+=en.at(index_1)
            }else{
                let index_1=fa.indexOf(char)
                index_1+=transfer_amount
                index_1=index_1%86
                out+=fa.at(index_1)
            }

        }
    }
    out_put.innerHTML=out
    out=""
}

function Convert_password_to_message(){
    for (let i=0;i<message.length;i++){
        char=message.charAt(i)
        if(char==' '){
            out+=char
        }else{
            if(language=='en'){
                let index_1=en.indexOf(char)
                index_1-=transfer_amount
                index_1=index_1%94
                out+=en.at(index_1)
            }else{
                let index_1=fa.indexOf(char)
                index_1-=transfer_amount
                index_1=index_1%86
                out+=fa.at(index_1)
            }
        }
    }
    out_put.innerHTML=out
    out=""
}
