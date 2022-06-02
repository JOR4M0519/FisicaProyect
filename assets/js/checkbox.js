function checkbox(checkbox) {

    var ids = checkbox.value.split('/');

    if (checkbox.checked) {
      document.getElementById(ids[0]).style.visibility = 'visible';
      document.getElementById(ids[1]).style.visibility = 'visible';
      document.getElementById(ids[1]).value = '';


    } else {
      document.getElementById(ids[0]).style.visibility = 'hidden';
      document.getElementById(ids[1]).style.visibility = 'hidden';
      document.getElementById(ids[1]).value = 0;

    }
  }
