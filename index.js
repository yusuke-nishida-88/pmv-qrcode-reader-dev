window.onload = function() {
    liff
    .init({
        liffId: "1661178769-BzE7Vbj8"
    })
    .then(() => {
        liff.scanCodeV2().then(result => {
            const stringifiedResult = result.value;
            liff.sendMessages([{
                'type': 'text',
                'text': stringifiedResult
            }]).then(() => {
                liff.closeWindow();
            }).catch((error) => {
                window.alert('Error sending message: ' + error);
            });
        }).catch(err => {
            window.alert('scanCode failed!');
        });
    })
    .catch((err) => {
        window.alert('Something went wrong with LIFF initialization.');
    });
  }
