## Install:
```javascript
<plugin spec="https://github.com/frozenmaiden/cordova-esolution-btprinter.git" source="git" />
```

## Function:

- listBluetoothDevices(): will give you a list of all the already previously paired bluetooth devices
- connect(address): this will establish the bluetooth connection with the selected printer (you need pass the address attribute of the selected device)
- feedPaper(lines): this will "print" blank lines
- printText(text, charset): will print the text respecting tags definition (charset encoding is ISO-8859-1 by default)
- printImage(base64, width, height, alignment): will print the image, the expected parameters are:
    1- Base64 image
    2- Printing box's width (it does not resize the image)
    3- Printing box's height (it does not resize the image)
    4- Alignment code (you can find the codes here)
- printBarcode(barcodeType, barcodeData): this will print a barcode accordingly to the given type and data

## Tags:

- {reset} Reset to default settings.
- {br} Line break. Equivalent of new line.
- {b}, {/b} Set or clear bold font style.
- {u}, {/u} Set or clear underline font style.
- {i}, {/i} Set or clear italic font style.
- {s}, {/s} Set or clear small font style.
- {h}, {/h} Set or clear high font style.
- {w}, {/w} Set or clear wide font style.
- {left} Aligns text to the left paper edge.
- {center} Aligns text to the center of paper.
- {right} Aligns text to the right paper edge.

## Contoh:

```javascript
//List Bluetooth Devices
window.BTPrinter.listBluetoothDevices(
  function(devices) {

    console.log(devices);

    //Connecting to Printer Devices
    window.BTPrinter.connect(devices[0].address,
      function() {

          //Print Text
          window.BTPrinter.printText("Hello World", 'ISO-8859-1',
            function() {
              window.BTPrinter.feedPaper(100);

              alert("Print Berhasil");
            }
          );

      },
      function(error) {
        alert("Printer tidak ditemukan, silahkan sambungkan printer anda terlebih dahulu.");
      }
    );
  },
  function(error) {
    alert("Printer tidak ditemukan, silahkan sambungkan printer anda terlebih dahulu.");
  }
);
```
