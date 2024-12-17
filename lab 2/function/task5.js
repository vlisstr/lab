// Масив об'єктів
const phoneBook = [
    { name: "Marcus Aurelius", phone: "+380445554433" },
    { name: "John Doe", phone: "+380441112233" },
  ];
  
 
  function findPhoneByName(name) {
    for (const entry of phoneBook) {
      if (entry.name === name) {
        return entry.phone;
      }
    }
    return "Телефон не знайдено";
  }
  console.log(findPhoneByName("Marcus Aurelius"));
  
  
  const phoneHash = {
    "Marcus Aurelius": "+380445554433",
    "John Doe": "+380441112233",
  };
  
 
  function findPhoneByNameHash(name) {
    return phoneHash[name] || "Телефон не знайдено";
  }
  console.log(findPhoneByNameHash("John Doe"));
  