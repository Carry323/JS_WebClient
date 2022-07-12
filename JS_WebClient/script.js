function checkLogin(){
    var user_id = document.getElementById('user_id').value;
    var password = document.getElementById('password').value;

    if(user_id == 'GirenkoKarina@proj.ca' && password == '123'){
        document.getElementById('content_box').style.display='block';
        //document.getElementById('login_box').style.display = 'none';
    }
    else{
        alert('Invalid login data');
    }
}

function changeContent(object){
    if(object.id =='link0'){
        document.getElementById('lnk0').style.display = 'block';
        document.getElementById('lnk1').style.display = 'none';
        document.getElementById('lnk2').style.display = 'none';
        document.getElementById('lnk3').style.display = 'none';
        document.getElementById('lnk4').style.display = 'none';
        document.getElementById('lnk5').style.display = 'none';
        document.getElementById('lnk6').style.display = 'none';
        document.getElementById('lnk7').style.display = 'none';
        document.getElementById('lnk8').style.display = 'none';

    }

    if(object.id =='link1'){
        document.getElementById('lnk0').style.display = 'none';
        document.getElementById('lnk1').style.display = 'block';
        document.getElementById('lnk2').style.display = 'none';
        document.getElementById('lnk3').style.display = 'none';
        document.getElementById('lnk4').style.display = 'none';
        document.getElementById('lnk5').style.display = 'none';
        document.getElementById('lnk6').style.display = 'none';
        document.getElementById('lnk7').style.display = 'none';
        document.getElementById('lnk8').style.display = 'none';

    }

    if(object.id =='link2'){
        document.getElementById('lnk0').style.display = 'none';
        document.getElementById('lnk1').style.display = 'none';
        document.getElementById('lnk2').style.display = 'block';
        document.getElementById('lnk3').style.display = 'none';
        document.getElementById('lnk4').style.display = 'none';
        document.getElementById('lnk5').style.display = 'none';
        document.getElementById('lnk6').style.display = 'none';
        document.getElementById('lnk7').style.display = 'none';
        document.getElementById('lnk8').style.display = 'none';

    }

    if(object.id =='link3'){
        document.getElementById('lnk0').style.display = 'none';
        document.getElementById('lnk1').style.display = 'none';
        document.getElementById('lnk2').style.display = 'none';
        document.getElementById('lnk3').style.display = 'block';
        document.getElementById('lnk4').style.display = 'none';
        document.getElementById('lnk5').style.display = 'none';
        document.getElementById('lnk6').style.display = 'none';
        document.getElementById('lnk7').style.display = 'none';
        document.getElementById('lnk8').style.display = 'none';

    }

    if(object.id =='link4'){
        document.getElementById('lnk0').style.display = 'none';
        document.getElementById('lnk1').style.display = 'none';
        document.getElementById('lnk2').style.display = 'none';
        document.getElementById('lnk3').style.display = 'none';
        document.getElementById('lnk4').style.display = 'block';
        document.getElementById('lnk5').style.display = 'none';
        document.getElementById('lnk6').style.display = 'none';
        document.getElementById('lnk7').style.display = 'none';
        document.getElementById('lnk8').style.display = 'none';

    }

    if(object.id =='link5'){
        document.getElementById('lnk0').style.display = 'none';
        document.getElementById('lnk1').style.display = 'none';
        document.getElementById('lnk2').style.display = 'none';
        document.getElementById('lnk3').style.display = 'none';
        document.getElementById('lnk4').style.display = 'none';
        document.getElementById('lnk5').style.display = 'block';
        document.getElementById('lnk6').style.display = 'none';
        document.getElementById('lnk7').style.display = 'none';
        document.getElementById('lnk8').style.display = 'none';

    }

    if(object.id =='link6'){
        document.getElementById('lnk0').style.display = 'none';
        document.getElementById('lnk1').style.display = 'none';
        document.getElementById('lnk2').style.display = 'none';
        document.getElementById('lnk3').style.display = 'none';
        document.getElementById('lnk4').style.display = 'none';
        document.getElementById('lnk5').style.display = 'none';
        document.getElementById('lnk6').style.display = 'block';
        document.getElementById('lnk7').style.display = 'none';
        document.getElementById('lnk8').style.display = 'none';

    }

    if(object.id =='link7'){
        document.getElementById('lnk0').style.display = 'none';
        document.getElementById('lnk1').style.display = 'none';
        document.getElementById('lnk2').style.display = 'none';
        document.getElementById('lnk3').style.display = 'none';
        document.getElementById('lnk4').style.display = 'none';
        document.getElementById('lnk5').style.display = 'none';
        document.getElementById('lnk6').style.display = 'none';
        document.getElementById('lnk7').style.display = 'block';
        document.getElementById('lnk8').style.display = 'none';

    }

    if(object.id =='link8'){
        document.getElementById('lnk0').style.display = 'none';
        document.getElementById('lnk1').style.display = 'none';
        document.getElementById('lnk2').style.display = 'none';
        document.getElementById('lnk3').style.display = 'none';
        document.getElementById('lnk4').style.display = 'none';
        document.getElementById('lnk5').style.display = 'none';
        document.getElementById('lnk6').style.display = 'none';
        document.getElementById('lnk7').style.display = 'none';
        document.getElementById('lnk8').style.display = 'block';

    }


}