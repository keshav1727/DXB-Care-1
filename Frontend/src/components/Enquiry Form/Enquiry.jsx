import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Enquiry.css';
import Select from 'react-select'
import image from './ab thik hia na.jpg'

function Enquiry() {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    enquiry: '',
    email: '',
    country: '',
    telCode: 'Country Code'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.telCode !== '+000' && formData.contactNumber && formData.enquiry) {
      emailjs.send(
        'service_6wrtli9',  // Replace with your EmailJS service ID
        'template_twabenb', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.enquiry,
          contact_number: formData.telCode + formData.contactNumber
        },
        'e_omdj8V6TYaozSHu' // Replace with your EmailJS user ID
      ).then((response) => {
        alert('Your enquiry was successfully sent.');
        setFormData({
          name: '',
          contactNumber: '',
          enquiry: '',
          email: '',
          country: '',
          telCode: '+000'
        });
      }).catch((error) => {
        console.error('Failed to send enquiry:', error);
        alert('Failed to send your enquiry. Please try again later.');
      });
    } else {
      alert('Please fill in all required fields.');
    }
  };


  const countryCodes = [
    {value:'971',label:"(+971) United Arab Emirates "},
    {value : '1876',label:'(+1876) Jamaica'}, 
   
{value:'81',label:"(+81) Japan"},
{value:'962',label:"(+962) Jordan"},
{value:'7',label:"(+7) Kazakhstan"},
{value:'254',label:"(+254) Kenya"},
{value:'686',label:"(+686) Kiribati"},
{value:'82',label:"(+82) Korea - South"},
{value:'965',label:"(+965) Kuwait"},
{value:'996',label:"(+996) Kyrgyzstan"},
{value:'856',label:"(+856) Laos"},
{value:'371',label:"(+371) Latvia"},
{value:'961',label:"(+961) Lebanon"},
{value:'266',label:"(+266) Lesotho"},
{value:'231',label:"(+231) Liberia"},
{value:'218',label:"(+218) Libya"},
{value:'417',label:"(+417) Liechtenste"},
{value:'370',label:"(+370) Lithuania"},
{value:'352',label:"(+352) Luxembourg"},
{value:'853',label:"(+853) Macao"},
{value:'389',label:"(+389) Macedonia"},
{value:'261',label:"(+261) Madagascar"},
{value:'265',label:"(+265) Malawi"},
{value:'960',label:"(+960) Maldives"},
{value:'223',label:"(+223) Mali"},
{value:'356',label:"(+356) Malta"},
{value:'692',label:"(+692) Marshall Islands"},
{value:'596',label:"(+596) Martinique"},
{value:'222',label:"(+222) Mauritania"},
{value:'269',label:"(+269) Mayotte"},
{value:'52',label:"(+52) Mexico"},
{value:'691',label:"(+691) Micronesia"},
{value:'373',label:"(+373) Moldova"},
{value:'377',label:"(+377) Monaco"},
{value:'976',label:"(+976) Mongolia"},
{value:'166',label:"(+1664) Montserra"},
{value:'212',label:"(+212) Morocco"},
{value:'258',label:"(+258) Mozambique"},
{value:'95',label:"(+95) Myanmar"},
{value:'264',label:"(+264) Namibia"},
{value:'674',label:"(+674) Nauru"},
{value:'977',label:"+977) Nepal"},
{value:'31',label:"(+31) Netherlands"},
{value:'687',label:"(+687) New Caledon"},
{value:'64',label:"(+64) New Zealand"},
{value:'505',label:"(+505) Nicaragua"},
{value:'227',label:"(+227) Niger"},
{value:'234',label:"(+234) Nigeria"},
{value:'683',label:"(+683) Niue"},
{value:'672',label:"(+672) Norfolk Islands"},
{value:'670',label:"(+670) Northern Marianas"},
{value:'47',label:"(+47) Norway"},
{value:'968',label:"(+968) Oman"},
{value:'92',label:"(+92) Pakistan"},
{value:'680',label:"(+680) Palau"},
{value:'507',label:"(+507) Panama"},
{value:'675',label:"(+675) Papua New Guinea"},
{value:'595',label:"(+595) Paraguay"},
{value:'51',label:"(+51) Peru"},
{value:'63',label:"(+63) Philippines"},
{value:'48',label:"(+48) Poland"},
{value:'351',label:"(+351) Portugal"},
{value:'1787',label:"(+1787) Puerto Rico"},
{value:'974',label:"(+974) Qatar"},
{value:'262',label:"(+262) Reunion"},
{value:'40',label:"(+40) Romania"},
{value:'7',label:"(+7) Russia"},
{value:'250',label:"(+250) Rwanda"},
{value:'378',label:"(+378) San Marino"},
{value:'239',label:"(+239) Sao Tome &aoption"},
{value:'966',label:"(+966) Saudi Arabi"},
{value:'221',label:"(+221) Senegal"},
{value:'381',label:"(+381) Serbia"},
{value:'248',label:"(+248) Seychelles"},
{value:'232',label:"(+232) Sierra Leon"},
{value:'65',label:"(+65) Singapore"},
{value:'421',label:"(+421) Slovak Repu"},
{value:'386',label:"(+386) Slovenia"},
{value:'677',label:"(+677) Solomon Islands"},
{value:'252',label:"(+252) Somalia"},
{value:'27',label:"(+27) South Africa"},
{value:'34',label:"(+34) Spain"},
{value:'94',label:"(+94) Sri Lanka"},
{value:'290',label:"(+290) St. Helena"},
{value:'1869',label:"(+1869) St. Kitts"},
{value:'1758',label:"(+1758) St.Lucia"},
{ value: '44', label: "(+44) UK" },
    { value: '1', label: "(+1) USA" },
    { value:'213', label: "(+213) Algeria" },
    { value:'376',label: "(+376) Andorra"},
    { value:'244', label: "(+244) Angola"},
    { value:'1264',label:"(+1264) Anguilla"},
    {value:'1268',label:"(+1268) Antigua &amp; Barbuda"},
    { value:'374',label:"(+374) Armenia"},
    { value:'54',label:"(+54) Argentina"},
    { value:'297',label:"(+297) Aruba"},
    { value:'61',label:"(+61) Australia"},
    { value:'43',label:"(+43) Austria"},
    { value:'994',label:"(+994) Azerbaijan"},
    { value:'1242',label:"(+1242) Bahamas"},
    { value:'973',label:"(+973) Bahrain"},
    {value:'880',label:"(+880) Bangladesh"},
    {value:'1246',label:"(+1246) Barbados"},
    {value:'375',label:"(+375) Belarus"},
    { value:'32',label:"(+32) Belgium"},
    {value:'501',label:"(+501) Belize"},
    { value:'229',label:"(+229) Benin"},
    { value:'1441',label:"(+1441) Bermuda"},
    { value:'975',label:"(+975) Bhutan"},
    { value:'591',label:"(+591) Bolivia"},
    { value:'387',label:"(+387) Bosnia Herzegovina"},
    { value:'267',label:"(+267) Botswana"},
    { value:'55',label:"(+55) Brazil"},
    {value:'673',label:"(+673) Brunei"},
    {value:'359',label:"(+359) Bulgaria"},
    {value:'226',label:"(+226) Burkina Faso"},
    { value:'257',label:"(+257) Burundi"},
    { value:'855',label:"(+855) Cambodia"},
    { value:'237',label:"(+237) Cameroon"},
    { value:'1',label:"(+1) Canada"},
    { value:'238',label:"(+238) Cape Verde Islands"},
    { value:'1345',label:"(+1345) Cayman Islands"},
    { value:'236',label:"(+236) Central African Republic"},
    { value:'56',label:"(+56) Chile"},
    { value:'86',label:"(+86) China"},
    { value:'57',label:"(+57) Colombia"},
    { value:'269',label:"(+269) Comoros"},
    { value:'242',label:"(+242) Congo"},
    { value:'682',label:"(+682) Cook Islands"},
    {value:'506',label:"(+506) Costa Rica"},
    { value:'385',label:"(+385) Croatia"},
    { value:'90',label:"(+90) Cyprus- North"},
     {value:'357',label:"(+357) Cyprus - South"},
     { valu:'420',label:"(+420) Czech Republic"},
     { value:'45',label:"(+45) Denmark"},
     {value:'253',label:"(+253) Djibouti"},
     { value:'1809',label:"(+1809) Dominica"},
    { value:'593',label:"(+593) Ecuador"},
    { value:'20',label:"(+20) Egypt"},
    { value:'503',label:"(+503) El Salvador"},
    { value:'240',label:"(+240) Equatorial Guinea"},
    { value:'291',label:"(+291) Eritrea"},
    {value:'372',label:"(+372) Estonia"},
    { value:'251',label:"(+251) Ethiopia"},
   { value:'500',label:"(+500) Falkland Islands"},
   { value:'298',label:"(+298) Faroe Islands"},
   { value:'679',label:"(+679) Fiji"},
   {value:'358',label:"(+358) Finland"},
   { value:'33',label:"(+33) France"},
   {value:'594',label:"(+594) French Guiana"},
   { value:'689',label:"(+689) French Polynesia"},
   {value:'241',label:"(+241) Gabon"},
   { value:"220",label:"(+220) Gambia"},
   { value:"7880",label:"(+7880) Georgia"},
   { value:"49",label:"(+49) Germany"},
   { value:"233",label:"(+233) Ghana"},
   { value:"350",label:"(+350) Gibraltar"},
   { value:"30",label:"(+30) Greece"},
   { value:"299",label:"(+299) Greenland"},
   { value:"1473",label:"(+1473) Grenada"},
   { value:"590",label:"(+590) Guadeloupe"},
   { value:"671",label:"(+671) Guam"},
   { value:"502",label:"(+502) Guatemala"},
   {value:"224",label:"(+224) Guinea"},
   { value:"245",label:"(+245) Guinea - Bissau"},
   { value:"592",label:"(+592) Guyana"},
   { value:"509",label:"(+509) Haiti"},
   { value:'504',label:"(+504) Honduras"},
   { value:'852',label:"(+852) Hong Kong"},
   { value:'36',label:"(+36) Hungary"},
   { value:'354',label:"(+354) Iceland"},
   { value:'91',label:"(+91) India"},
   { value:'62',label:"(+62) Indonesia"},
   {value:'964',label:"(+964) Iraq"},
   { value:'972',label:"(+972) Israel"},
   { value:'39',label:"(+39) Italy"},
   { value:'353',label:"(+353) Ireland"},
   {value:'597',label:"(+597) Suriname"},
{value:'249',label:"(+249) Sudan"},
{value:'268',label:"(+268) Swaziland"},
{value:'46',label:"(+46) Sweden"},
{value:'41',label:"(+41) Switzerland "},
{value:'886',label:"(+886) Taiwan "},
{value:'992',label:"(+992) Tajikistan"},
{value:'66',label:"(+66) Thailand"},
{value:'228',label:"(+228) Togo"},
{value:'676',label:"(+676) Tonga"},
{value:'1868',label:"(+1868) Trinidad &amp; Tobago"},
{value:'216',label:"(+216) Tunisia"},
{value:'90',label:"(+90) Turkey"},
{value:'993',label:"(+993) Turkmenistan"},
{value:'1649',label:"(+1649) Turks &amp; Caicos Islands"},
{value:'688',label:"(+688) Tuvalu"},
{value:'256',label:"(+256) Uganda"},
{value:'380',label:"(+380) Ukraine "},

{value:'598',label:"(+598) Uruguay "},
{value:'998',label:"(+998) Uzbekistan "},
{value:'678',label:"(+678) Vanuatu "},
{value:'379',label:"(+379) Vatican City"},
{value:'58',label:"(+58) Venezuela "},
{value:'84',label:"(+84) Vietnam "},
{value:'1',label:"(+1) Virgin Islands - British"},
{value:'1',label:"(+1) Virgin Islands - US"},
{value:'681',label:"(+681) Wallis &amp; Futuna"},
{value:'969',label:"(+969) Yemen (North)"},
{value:'967',label:"(+967) Yemen (South)"},
{value:'260',label:"(+260) Zambia"},
{value:'263',label:"(+263) Zimbabwe"},
  ];

  const handleCountryCodeChange = (selectedOption) => {
    setFormData({ ...formData, telCode: selectedOption.value });
  };

  const handleMail = () => {
    // Function to handle mail action
    window.open('mailto:hello@dxb.care', '_blank'); // Replace with your email
  };
  const handleWhatsApp = () =>{
    window.open('https://wa.me/919599005868?', '_blank' )
  }

  const handleTelegram = () =>{
    window.open('https://telegram.me/dxbcare?', '_blank' )
  }
 
  return (
    <div className="enquiry-div" id='enquiry-div'>
      <div className="enquiry-middle" >
      <div className="enquiry-left-div">
        <div className="header">
          <h1>Contact us</h1>
          </div>
          <div className="text">
          <p>Feel free to reach out directly or use the adjacent form - We're excited to be a part of your story!</p>
          </div>
          <div className="icons">
            <div className="icon">
          <svg onClick={handleMail} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
</svg><p onClick={handleMail}>Mail</p>
</div>
<div className="icon">
<svg onClick={handleTelegram} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
</svg><p  onClick={handleTelegram}>Telegram</p>
</div>
<div className="icon">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>
<p>Schedule a call</p>
</div>
<div className="icon">
<svg onClick={handleWhatsApp} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
<p onClick={handleWhatsApp}>Whatsapp</p>
</div>
          </div>
      </div>

    <div className="form-container">
      <h1>How We Can Help You</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
        <Select
    classNamePrefix="Select-type"
    options={countryCodes} // Pass options to react-select
    value={{ value: formData.telCode, label: formData.telCode }} // Set initial value
    onChange={handleCountryCodeChange} // Handle change
    placeholder="Select Country Code"
    required
/>         
        </div>
        <div className="form-group">
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            placeholder="Contact Number"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            id="enquiry"
            name="enquiry"
            value={formData.enquiry}
            onChange={handleInputChange}
            placeholder="Enquiry"
            required
          />
        </div>
       
        <div className="form-group-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
}

export default Enquiry;
