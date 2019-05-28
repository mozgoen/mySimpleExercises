$.ajax({
    type: 'POST',
    url: 'response.php?action=sample2',
    data: 'name=Andrew&nickname=Aramis',
    success: function(data){
        alert(1);
    }
});$.ajax({
    type: 'POST',
    url: 'response.php?action=sample2',
    data: 'name=Andrew&nickname=Aramis',
    success: function(data){
        alert(2);
    }
});$.ajax({
    type: 'POST',
    url: 'response.php?action=sample2',
    data: 'name=Andrew&nickname=Aramis',
    success: function(data){
        alert(3);
    }
});$.ajax({
    type: 'POST',
    url: 'response.php?action=sample2',
    data: 'name=Andrew&nickname=Aramis',
    success: function(data){
        alert(4);
    }
});
alert(456);