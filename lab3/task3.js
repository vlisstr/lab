function ipToNumber(ip = '127.0.0.1') {
    const bytes = ip.split('.').map(Number);
    return bytes.reduce((sum, byte, index) => {
      const shift = (3 - index) * 8;
      return sum + (byte << shift);
    }, 0); 
  }
  
  // Приклади:
  console.log(ipToNumber('127.0.0.1'));       
  console.log(ipToNumber('10.0.0.1'));        
  console.log(ipToNumber('192.168.1.10'));    
  console.log(ipToNumber('165.225.133.150')); 
  console.log(ipToNumber('0.0.0.0'));         
  console.log(ipToNumber('8.8.8.8'));         
  