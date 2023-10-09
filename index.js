let celsius=document.getElementById('cel');
        let farhenite=document.getElementById('far');
        let kelvin=document.getElementById('kel');

        celsius.oninput = function(){
            let f = (parseFloat(celsius.value)*1.8)+32
            farhenite.value=parseFloat(f.toFixed(2));

            let k = parseFloat(celsius.value)+273.15
            kelvin.value=parseFloat(k.toFixed(2));
        }

        farhenite.oninput = function(){
            let c = (parseFloat(farhenite.value)-32)/1.8;
            celsius.value = parseFloat(c.toFixed(2));

            let k = (parseFloat(farhenite.value)-32)/1.8 + 273.15
            kelvin.value=parseFloat(k.toFixed(2));
        }

        kelvin.oninput = function() {
            let c = parseFloat(kelvin.value)-273.15;
            celsius.value=parseFloat(c.toFixed(2));

            let f = ((parseFloat(kelvin.value)-273.15)*1.8)+32;
            farhenite.value=parseFloat(f.toFixed(2));
        }