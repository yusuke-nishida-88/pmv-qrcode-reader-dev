window.onload = function() {
    liff
    .init({
        liffId: "1661178769-BzE7Vbj8"
    })
    .then(() => {
        const idToken = liff.getDecodedIDToken();
        if (idToken){
            window.alert(idToken.email);
        }
    })
    .catch((err) => {
        window.alert('Something went wrong with LIFF initialization.');
    });
  }
