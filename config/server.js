module.exports = {
  APPLICATION_ID: 
    process.env.APPLICATION_ID || 
    "16986506023fda5c9f01297644a41218bcb60db75460de21d99342d373c366c0",
  SECRET: 
    process.env.SECRET || 
    "b9835fec56cff261a00b2d86ea53d6e144aaa4d65c19c5461a2f32053fd95782",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
}