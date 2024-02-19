const express = require('express');  
const app = express();  
  
app.get('/countdown', (req, res) => {  
   const christmas = new Date('December 25, 2024 00:00:00');  
   const today = new Date();  
   const diff = christmas - today;  
   res.json({  
      christmas: christmas.getTime(),  
      today: today.getTime(),  
      timeUntilms: diff,
      timeUntils: diff/1000,
      timeUntilM: diff/(1000*60),
      timeUntilD: diff/(24 * 60 * 60000),
   });  
});  
  
const PORT = 8000;  
app.listen(PORT, () => {  
  console.log(`Server running on port ${PORT}`);  
});  
