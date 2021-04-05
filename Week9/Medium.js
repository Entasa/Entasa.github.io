


function showYou() {
    document.getElementById('pic1').src = "Breakup.png"; 
    document.getElementById('pic2').src = "Weight.png"; 
    document.getElementById('pic2').setAttribute("onclick", "location.href = 'https://www.google.com/search?q=kim+kardashian+weight&ei=eXhrYPudNMKzggf4nYHAAQ&oq=kim+kardashian+weight&gs_lcp=Cgdnd3Mtd2l6EAMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgoIABCxAxCwAxBDOg0ILhCwAxDIAxBDEJMCOgoILhCwAxDIAxBDOgcIABCxAxBDOgUILhCxAzoFCAAQsQM6CAguELEDEJMCSgUIOBIBMVDC0BNYoOITYPXpE2gBcAB4AIABwgGIAYgHkgEDNS4zmAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=gws-wiz&ved=0ahUKEwi7vsX4_efvAhXCmeAKHfhOABgQ4dUDCA0&uact=5';");
    document.getElementById('pic1').setAttribute("onclick", "location.href='https://www.youtube.com/results?search_query=We+broke+up+';");
    document.getElementById('container').classList.toggle('fade-in'); 
    document.getElementById('text').innerText = "McLuhan states that electronic information devices are causing a serious dilemma between our claim to privacy and the community's need to know. In today's world, the idea of privacy for well known figures is in simplest form non-existent. The term 'public' figure has created this idea that we are entitled to know all about them and that is the norm now."
}

function showGovernment() {
    
    document.getElementById('pic1').src = "Frame.jpeg"; 
    document.getElementById('pic1').setAttribute("onclick", "location.href='https://twitter.com/search?q=Joe%20Biden&src=typed_query';");
    document.getElementById('pic2').src = "GeorgeFloyd.jpg";
    document.getElementById('pic2').setAttribute("onclick", "location.href='https://www.instagram.com/explore/tags/georgefloyd/?hl=en';");

    document.getElementById('container').classList.toggle('fade-in'); 
    document.getElementById('text').innerText = "Politics is not what it was several decades ago, like McLuhan said our living room has become a voting booth. In the comfort of our own homes we can participate in movements that support our political beliefs."
}

function showOthers() {
    
    document.getElementById('pic1').src = "GeorgeFloyd.jpg"; 
    document.getElementById('pic1').setAttribute("onclick", "location.href='https://www.justiceforbigfloyd.com/';"); 
    document.getElementById('pic2').src = "Hindus.jpeg"; 
    document.getElementById('pic2').setAttribute("onclick", "location.href= 'https://www.instagram.com/p/CNGhl97BvLh/?igshid=dcz1hfu1xr5j';");
    document.getElementById('slide_container').classList.toggle('fade-in'); 
    document.getElementById('text').innerText = "Just like political views and opinions are so easily available of media, we also no longer have the excuse of ignorancy and lack of knowledge about current events. There is no curtain over the tradegies in the world."
}

