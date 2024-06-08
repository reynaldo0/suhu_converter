document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const temperatureInput = document.getElementById('temperature').value;
    const conversionType = document.querySelector('input[name="conversion"]:checked').value;
    
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    
    resultDiv.textContent = '';
    errorDiv.textContent = '';
    
    const temperature = parseFloat(temperatureInput);
    if (isNaN(temperature)) {
        errorDiv.textContent = 'Masukkan Angka Yang Valid!';
        return;
    }
    
    let convertedTemperature;
    if (conversionType === 'c-to-f') {
        convertedTemperature = (temperature * 9/5) + 32;
        resultDiv.textContent = `${temperature}°C is ${convertedTemperature.toFixed(2)}°F`;
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
        resultDiv.textContent = `${temperature}°F is ${convertedTemperature.toFixed(2)}°C`;
    }
});
