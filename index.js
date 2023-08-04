window.onload = function() {
    liff
    .init({
        liffId: "1661178769-pwmMGL6x"
    })
    .then(() => {
        const idToken = liff.getDecodedIDToken();
        window.alert(idToken);
    })
    .catch((err) => {
        window.alert('Something went wrong with LIFF initialization.');
    });
  }
