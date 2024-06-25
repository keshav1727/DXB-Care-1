import React, { useState } from 'react';
import './Enquiry.css'; // Import your CSS file

function Enquiry() {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    enquiry: '',
    email: '',
    country: '', // Add country to formData state
    telCode: '+000' // Set a default telephone code
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to backend
    console.log(formData);
    // Reset form after submission if needed
    setFormData({
      name: '',
      contactNumber: '',
      enquiry: '',
      email: '',
      country: '',
      telCode: '+000' // Reset telephone code to default after submission
    });
  };
  return (
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
        <select
            className='select-type'
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
          >
<option className="option" value="" id='selectedone' disabled="" selected="">Country </option>
<option className="option" value="Afghanistan">Afghanistan</option>
<option className="option" value="Albania">Albania</option>
<option className="option" value="Algeria">Algeria</option>
<option className="option" value="American Samoa">American Samoa</option>
<option className="option" value="Andorra">Andorra</option>
<option className="option" value="Angola">Angola</option>
<option className="option" value="Anguilla">Anguilla</option>
<option className="option" value="Antarctica">Antarctica</option>
<option className="option" value="Antigua and Barbuda">Antigua and Barbuda</option>
<option className="option" value="Argentina">Argentina</option>
<option className="option" value="Armenia">Armenia</option>
<option className="option" value="Aruba">Aruba</option>
<option className="option" value="Australia">Australia</option>
<option className="option" value="Austria">Austria</option>
<option className="option" value="Azerbaijan">Azerbaijan</option>
<option className="option" value="The Bahamas">Bahamas</option>
<option className="option" value="Bahrain">Bahrain</option>
<option className="option" value="Bangladesh">Bangladesh</option>
<option className="option" value="Barbados">Barbados</option>
<option className="option" value="Belarus">Belarus</option>
<option className="option" value="Belgium">Belgium</option>
<option className="option" value="Belize">Belize</option>
<option className="option" value="Benin">Benin</option>
<option className="option" value="Bermuda">Bermuda</option>
<option className="option" value="Bhutan">Bhutan</option>
<option className="option" value="Bolivia">Bolivia</option>
<option className="option" value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
<option className="option" value="Botswana">Botswana</option>
<option className="option" value="Bouvet Island">Bouvet Island</option>
<option className="option" value="Brazil">Brazil</option>
<option className="option" value="British Indian Ocean Territory">British Indian Ocean Territory</option>
<option className="option" value="Virgin Islands (British)">British Virgin Islands</option>
<option className="option" value="Brunei">Brunei</option>
<option className="option" value="Bulgaria">Bulgaria</option>
<option className="option" value="Burkina Faso">Burkina Faso</option>
<option className="option" value="Burundi">Burundi</option>
<option className="option" value="Cambodia">Cambodia</option>
<option className="option" value="Cameroon">Cameroon</option>
<option className="option" value="Canada">Canada</option>
<option className="option" value="Cape Verde">Cape Verde</option>
<option className="option" value="Cayman Islands">Cayman Islands</option>
<option className="option" value="Central African Republic">Central African Republic</option>
<option className="option" value="Chad">Chad</option>
<option className="option" value="Chile">Chile</option>
<option className="option" value="China">China</option>
<option className="option" value="Christmas Island">Christmas Island</option>
<option className="option" value="Cocos (Keeling) Islands">Cocos Islands</option>
<option className="option" value="Colombia">Colombia</option>
<option className="option" value="Comoros">Comoros</option>
<option className="option" value="Cook Islands">Cook Islands</option>
<option className="option" value="Costa Rica">Costa Rica</option>
<option className="option" value="Croatia">Croatia</option>
<option className="option" value="Cuba">Cuba</option>
<option className="option" value="Curaçao">Curacao</option>
<option className="option" value="Cyprus">Cyprus</option>
<option className="option" value="Czechia">Czech Republic</option>
<option className="option" value="Congo, Democratic Republic of the">Democratic Republic of the Congo</option>
<option className="option" value="Denmark">Denmark</option>
<option className="option" value="Djibouti">Djibouti</option>
<option className="option" value="Dominica">Dominica</option>
<option className="option" value="Dominican Republic">Dominican Republic</option>
<option className="option" value="East Timor (Timor-Leste)">East Timor</option>
<option className="option" value="Ecuador">Ecuador</option>
<option className="option" value="Egypt">Egypt</option>
<option className="option" value="El Salvador">El Salvador</option>
<option className="option" value="Equatorial Guinea">Equatorial Guinea</option>
<option className="option" value="Eritrea">Eritrea</option>
<option className="option" value="Estonia">Estonia</option>
<option className="option" value="Ethiopia">Ethiopia</option>
<option className="option" value="Falkland Islands (Malvinas)">Falkland Islands</option>
<option className="option" value="Faroe Islands">Faroe Islands</option>
<option className="option" value="Fiji">Fiji</option>
<option className="option" value="Finland">Finland</option>
<option className="option" value="France">France</option>
<option className="option" value="French Guiana">French Guiana</option>
<option className="option" value="French Polynesia">French Polynesia</option>
<option className="option" value="French Southern Territories">French Southern Territories</option>
<option className="option" value="Gabon">Gabon</option>
<option className="option" value="The Gambia">Gambia</option>
<option className="option" value="Georgia">Georgia</option>
<option className="option" value="Germany">Germany</option>
<option className="option" value="Ghana">Ghana</option>
<option className="option" value="Gibraltar">Gibraltar</option>
<option className="option" value="Greece">Greece</option>
<option className="option" value="Greenland">Greenland</option>
<option className="option" value="Grenada">Grenada</option>
<option className="option" value="Guadeloupe">Guadeloupe</option>
<option className="option" value="Guatemala">Guatemala</option>
<option className="option" value="Guernsey">Guernsey</option>
<option className="option" value="Guinea">Guinea</option>
<option className="option" value="Guinea-Bissau">Guinea-Bissau</option>
<option className="option" value="Guyana">Guyana</option>
<option className="option" value="Haiti">Haiti</option>
<option className="option" value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
<option className="option" value="Honduras">Honduras</option>
<option className="option" value="Hong Kong SAR">Hong Kong SAR</option>
<option className="option" value="Hungary">Hungary</option>
<option className="option" value="Iceland">Iceland</option>
<option className="option" value="India">India</option>
<option className="option" value="Indonesia">Indonesia</option>
<option className="option" value="Iraq">Iraq</option>
<option className="option" value="Ireland">Ireland</option>
<option className="option" value="Isle of Man">Isle of Man</option>
<option className="option" value="Israel">Israel</option>
<option className="option" value="Italy">Italy</option>
<option className="option" value="Côte d’Ivoire">Ivory Coast</option>
<option className="option" value="Jamaica">Jamaica</option>
<option className="option" value="Japan">Japan</option>
<option className="option" value="Jersey">Jersey</option>
<option className="option" value="Jordan">Jordan</option>
<option className="option" value="Kazakhstan">Kazakhstan</option>
<option className="option" value="Kenya">Kenya</option>
<option className="option" value="Kiribati">Kiribati</option>
<option className="option" value="Kuwait">Kuwait</option>
<option className="option" value="Kyrgyzstan">Kyrgyzstan</option>
<option className="option" value="Laos">Laos</option>
<option className="option" value="Latvia">Latvia</option>
<option className="option" value="Lebanon">Lebanon</option>
<option className="option" value="Lesotho">Lesotho</option>
<option className="option" value="Liberia">Liberia</option>
<option className="option" value="Libya">Libya</option>
<option className="option" value="Liechtenstein">Liechtenstein</option>
<option className="option" value="Lithuania">Lithuania</option>
<option className="option" value="Luxembourg">Luxembourg</option>
<option className="option" value="Macau SAR">Macau SAR</option>
<option className="option" value="North Macedonia">Macedonia</option>
<option className="option" value="Madagascar">Madagascar</option>
<option className="option" value="Malawi">Malawi</option>
<option className="option" value="Malaysia">Malaysia</option>
<option className="option" value="Maldives">Maldives</option>
<option className="option" value="Mali">Mali</option>
<option className="option" value="Malta">Malta</option>
<option className="option" value="Marshall Islands">Marshall Islands</option>
<option className="option" value="Martinique">Martinique</option>
<option className="option" value="Mauritania">Mauritania</option>
<option className="option" value="Mauritius">Mauritius</option>
<option className="option" value="Mayotte">Mayotte</option>
<option className="option" value="Mexico">Mexico</option>
<option className="option" value="Micronesia">Micronesia</option>
<option className="option" value="Moldova">Moldova</option>
<option className="option" value="Monaco">Monaco</option>
<option className="option" value="Mongolia">Mongolia</option>
<option className="option" value="Montenegro">Montenegro</option>
<option className="option" value="Montserrat">Montserrat</option>
<option className="option" value="Morocco">Morocco</option>
<option className="option" value="Mozambique">Mozambique</option>
<option className="option" value="Myanmar">Myanmar</option>
<option className="option" value="Namibia">Namibia</option>
<option className="option" value="Nauru">Nauru</option>
<option className="option" value="Nepal">Nepal</option>
<option className="option" value="Netherlands">Netherlands</option>
<option className="option" value="New Caledonia">New Caledonia</option>
<option className="option" value="New Zealand">New Zealand</option>
<option className="option" value="Nicaragua">Nicaragua</option>
<option className="option" value="Niger">Niger</option>
<option className="option" value="Nigeria">Nigeria</option>
<option className="option" value="Niue">Niue</option>
<option className="option" value="Norfolk Island">Norfolk Island</option>
<option className="option" value="Korea (North)">North Korea</option>
<option className="option" value="Northern Mariana Islands">Northern Mariana Islands</option>
<option className="option" value="Norway">Norway</option>
<option className="option" value="Oman">Oman</option>
<option className="option" value="Pakistan">Pakistan</option>
<option className="option" value="Palau">Palau</option>
<option className="option" value="Panama">Panama</option>
<option className="option" value="Papua New Guinea">Papua New Guinea</option>
<option className="option" value="Paraguay">Paraguay</option>
<option className="option" value="Peru">Peru</option>
<option className="option" value="Philippines">Philippines</option>
<option className="option" value="Pitcairn Islands">Pitcairn</option>
<option className="option" value="Poland">Poland</option>
<option className="option" value="Portugal">Portugal</option>
<option className="option" value="Puerto Rico">Puerto Rico</option>
<option className="option" value="Qatar">Qatar</option>
<option className="option" value="Reunion">Reunion</option>
<option className="option" value="Romania">Romania</option>
<option className="option" value="Rwanda">Rwanda</option>
<option className="option" value="Saint Barthélemy">Saint Barthelemy</option>
<option className="option" value="St. Helena">Saint Helena</option>
<option className="option" value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
<option className="option" value="Saint Lucia">Saint Lucia</option>
<option className="option" value="Saint Martin">Saint Martin</option>
<option className="option" value="St. Pierre and Miquelon">Saint Pierre and Miquelon</option>
<option className="option" value="St Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
<option className="option" value="Samoa">Samoa</option>
<option className="option" value="San Marino">San Marino</option>
<option className="option" value="Sao Tome and Principe">Sao Tome and Principe</option>
<option className="option" value="Saudi Arabia">Saudi Arabia</option>
<option className="option" value="Senegal">Senegal</option>
<option className="option" value="Seychelles">Seychelles</option>
<option className="option" value="Sierra Leone">Sierra Leone</option>
<option className="option" value="Singapore">Singapore</option>
<option className="option" value="Slovakia">Slovakia</option>
<option className="option" value="Slovenia">Slovenia</option>
<option className="option" value="Solomon Islands">Solomon Islands</option>
<option className="option" value="Somalia">Somalia</option>
<option className="option" value="South Africa">South Africa</option>
<option className="option" value="S. Georgia and S. Sandwich Isls.">South Georgia and the South Sandwich Islands</option>
<option className="option" value="Korea (South)">South Korea</option>
<option className="option" value="Sudan, South">South Sudan</option>
<option className="option" value="Spain">Spain</option>
<option className="option" value="Sri Lanka">Sri Lanka</option>
<option className="option" value="Suriname">Suriname</option>
<option className="option" value="Svalbard and Jan Mayen Islands">Svalbard and Jan Mayen</option>
<option className="option" value="Eswatini">Swaziland</option>
<option className="option" value="Sweden">Sweden</option>
<option className="option" value="Switzerland">Switzerland</option>
<option className="option" value="Syria">Syria</option>
<option className="option" value="Taiwan">Taiwan</option>
<option className="option" value="Tajikistan">Tajikistan</option>
<option className="option" value="Tanzania">Tanzania</option>
<option className="option" value="Thailand">Thailand</option>
<option className="option" value="Togo">Togo</option>
<option className="option" value="Tokelau">Tokelau</option>
<option className="option" value="Tonga">Tonga</option>
<option className="option" value="Trinidad and Tobago">Trinidad and Tobago</option>
<option className="option" value="Tunisia">Tunisia</option>
<option className="option" value="Turkey">Turkey</option>
<option className="option" value="Turkmenistan">Turkmenistan</option>
<option className="option" value="Turks and Caicos Islands">Turks and Caicos Islands</option>
<option className="option" value="Tuvalu">Tuvalu</option>
<option className="option" value="Virgin Islands (U.S.)">U.S. Virgin Islands</option>
<option className="option" value="Uganda">Uganda</option>
<option className="option" value="Ukraine">Ukraine</option>
<option className="option" value="United Arab Emirates">United Arab Emirates</option>
<option className="option" value="United Kingdom">United Kingdom</option>
<option className="option" value="United States">United States</option>
<option className="option" value="Uruguay">Uruguay</option>
<option className="option" value="Uzbekistan">Uzbekistan</option>
<option className="option" value="Vanuatu">Vanuatu</option>
<option className="option" value="Vatican City State (Holy See)">Vatican</option>
<option className="option" value="Venezuela">Venezuela</option>
<option className="option" value="Vietnam">Vietnam</option>
<option className="option" value="Wallis and Futuna Islands">Wallis and Futuna</option>
<option className="option" value="Western Sahara">Western Sahara</option>
<option className="option" value="Yemen">Yemen</option>
<option className="option" value="Zambia">Zambia</option>
<option className="option" value="Zimbabwe">Zimbabwe</option>
</select>
        </div>
        <div className="form-group">
        <select
            className='select-type'
            name="telCode"
            value={formData.telCode}
            onChange={handleInputChange}
            required
          ><option value="000" selected="">+000</option><option value="44">(+44) UK</option><option value="1">(+1) USA</option><option value="213">(+213) Algeria</option><option value="376">(+376) Andorra</option><option value="244">(+244) Angola</option><option value="1264">(+1264) Anguilla</option><option value="1268">(+1268) Antigua &amp; Barbuda</option><option value="54">(+54) Argentina</option><option value="374">(+374) Armenia</option><option value="297">(+297) Aruba</option><option value="61">(+61) Australia</option><option value="43">(+43) Austria</option><option value="994">(+994) Azerbaijan</option><option value="1242">(+1242) Bahamas</option><option value="973">(+973) Bahrain</option><option value="880">(+880) Bangladesh</option><option value="1246">(+1246) Barbados</option><option value="375">(+375) Belarus</option><option value="32">(+32) Belgium</option><option value="501">(+501) Belize</option><option value="229">(+229) Benin</option><option value="1441">(+1441) Bermuda</option><option value="975">(+975) Bhutan</option><option value="591">(+591) Bolivia</option><option value="387">(+387) Bosnia Herzegovina</option><option value="267">(+267) Botswana</option><option value="55">(+55) Brazil</option><option value="673">(+673) Brunei</option><option value="359">(+359) Bulgaria</option><option value="226">(+226) Burkina Faso</option><option value="257">(+257) Burundi</option><option value="855">(+855) Cambodia</option><option value="237">(+237) Cameroon</option><option value="1">(+1) Canada</option><option value="238">(+238) Cape Verde Islands</option><option value="1345">(+1345) Cayman Islands</option><option value="236">(+236) Central African Republic</option><option value="56">(+56) Chile</option><option value="86">(+86) China</option><option value="57">(+57) Colombia</option><option value="269">(+269) Comoros</option><option value="242">(+242) Congo</option><option value="682">(+682) Cook Islands</option><option value="506">(+506) Costa Rica</option><option value="385">(+385) Croatia</option><option value="90">(+90) Cyprus - North</option><option value="357">(+357) Cyprus - South</option><option value="420">(+420) Czech Republic</option><option value="45">(+45) Denmark</option><option value="253">(+253) Djibouti</option><option value="1809">(+1809) Dominica</option><option value="593">(+593) Ecuador</option><option value="20">(+20) Egypt</option><option value="503">(+503) El Salvador</option><option value="240">(+240) Equatorial Guinea</option><option value="291">(+291) Eritrea</option><option value="372">(+372) Estonia</option><option value="251">(+251) Ethiopia</option><option value="500">(+500) Falkland Islands</option><option value="298">(+298) Faroe Islands</option><option value="679">(+679) Fiji</option><option value="358">(+358) Finland</option><option value="33">(+33) France</option><option value="594">(+594) French Guiana</option><option value="689">(+689) French Polynesia</option><option value="241">(+241) Gabon</option><option value="220">(+220) Gambia</option><option value="7880">(+7880) Georgia</option><option value="49">(+49) Germany</option><option value="233">(+233) Ghana</option><option value="350">(+350) Gibraltar</option><option value="30">(+30) Greece</option><option value="299">(+299) Greenland</option><option value="1473">(+1473) Grenada</option><option value="590">(+590) Guadeloupe</option><option value="671">(+671) Guam</option><option value="502">(+502) Guatemala</option><option value="224">(+224) Guinea</option><option value="245">(+245) Guinea - Bissau</option><option value="592">(+592) Guyana</option><option value="509">(+509) Haiti</option><option value="504">(+504) Honduras</option><option value="852">(+852) Hong Kong</option><option value="36">(+36) Hungary</option><option value="354">(+354) Iceland</option><option value="91">(+91) India</option><option value="62">(+62) Indonesia</option><option value="964">(+964) Iraq</option><option value="353">(+353) Ireland</option><option value="972">(+972) Israel</option><option value="39">(+39) Italy</option><option value="1876">(+1876) Jamaica</option><option value="81">(+81) Japan</option><option value="962">(+962) Jordan</option><option value="7">(+7) Kazakhstan</option><option value="254">(+254) Kenya</option><option value="686">(+686) Kiribati</option><option value="82">(+82) Korea - South</option><option value="965">(+965) Kuwait</option><option value="996">(+996) Kyrgyzstan</option><option value="856">(+856) Laos</option><option value="371">(+371) Latvia</option><option value="961">(+961) Lebanon</option><option value="266">(+266) Lesotho</option><option value="231">(+231) Liberia</option><option value="218">(+218) Libya</option><option value="417">(+417) Liechtenstein</option><option value="370">(+370) Lithuania</option><option value="352">(+352) Luxembourg</option><option value="853">(+853) Macao</option><option value="389">(+389) Macedonia</option><option value="261">(+261) Madagascar</option><option value="265">(+265) Malawi</option><option value="960">(+960) Maldives</option><option value="223">(+223) Mali</option><option value="356">(+356) Malta</option><option value="692">(+692) Marshall Islands</option><option value="596">(+596) Martinique</option><option value="222">(+222) Mauritania</option><option value="269">(+269) Mayotte</option><option value="52">(+52) Mexico</option><option value="691">(+691) Micronesia</option><option value="373">(+373) Moldova</option><option value="377">(+377) Monaco</option><option value="976">(+976) Mongolia</option><option value="1664">(+1664) Montserrat</option><option value="212">(+212) Morocco</option><option value="258">(+258) Mozambique</option><option value="95">(+95) Myanmar</option><option value="264">(+264) Namibia</option><option value="674">(+674) Nauru</option><option value="977">(+977) Nepal</option><option value="31">(+31) Netherlands</option><option value="687">(+687) New Caledonia</option><option value="64">(+64) New Zealand</option><option value="505">(+505) Nicaragua</option><option value="227">(+227) Niger</option><option value="234">(+234) Nigeria</option><option value="683">(+683) Niue</option><option value="672">(+672) Norfolk Islands</option><option value="670">(+670) Northern Marianas</option><option value="47">(+47) Norway</option><option value="968">(+968) Oman</option><option value="92">(+92) Pakistan</option><option value="680">(+680) Palau</option><option value="507">(+507) Panama</option><option value="675">(+675) Papua New Guinea</option><option value="595">(+595) Paraguay</option><option value="51">(+51) Peru</option><option value="63">(+63) Philippines</option><option value="48">(+48) Poland</option><option value="351">(+351) Portugal</option><option value="1787">(+1787) Puerto Rico</option><option value="974">(+974) Qatar</option><option value="262">(+262) Reunion</option><option value="40">(+40) Romania</option><option value="7">(+7) Russia</option><option value="250">(+250) Rwanda</option><option value="378">(+378) San Marino</option><option value="239">(+239) Sao Tome &amp; Principe</option><option value="966">(+966) Saudi Arabia</option><option value="221">(+221) Senegal</option><option value="381">(+381) Serbia</option><option value="248">(+248) Seychelles</option><option value="232">(+232) Sierra Leone</option><option value="65">(+65) Singapore</option><option value="421">(+421) Slovak Republic</option><option value="386">(+386) Slovenia</option><option value="677">(+677) Solomon Islands</option><option value="252">(+252) Somalia</option><option value="27">(+27) South Africa</option><option value="34">(+34) Spain</option><option value="94">(+94) Sri Lanka</option><option value="290">(+290) St. Helena</option><option value="1869">(+1869) St. Kitts</option><option value="1758">(+1758) St. Lucia</option><option value="597">(+597) Suriname</option><option value="249">(+249) Sudan</option><option value="268">(+268) Swaziland</option><option value="46">(+46) Sweden</option><option value="41">(+41) Switzerland</option><option value="886">(+886) Taiwan</option><option value="992">(+992) Tajikistan</option><option value="66">(+66) Thailand</option><option value="228">(+228) Togo</option><option value="676">(+676) Tonga</option><option value="1868">(+1868) Trinidad &amp; Tobago</option><option value="216">(+216) Tunisia</option><option value="90">(+90) Turkey</option><option value="993">(+993) Turkmenistan</option><option value="1649">(+1649) Turks &amp; Caicos Islands</option><option value="688">(+688) Tuvalu</option><option value="256">(+256) Uganda</option><option value="380">(+380) Ukraine</option><option value="971">(+971) United Arab Emirates</option><option value="598">(+598) Uruguay</option><option value="998">(+998) Uzbekistan</option><option value="678">(+678) Vanuatu</option><option value="379">(+379) Vatican City</option><option value="58">(+58) Venezuela</option><option value="84">(+84) Vietnam</option><option value="1">(+1) Virgin Islands - British</option><option value="1">(+1) Virgin Islands - US</option><option value="681">(+681) Wallis &amp; Futuna</option><option value="969">(+969) Yemen (North)</option><option value="967">(+967) Yemen (South)</option><option value="260">(+260) Zambia</option><option value="263">(+263) Zimbabwe</option></select>
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
  );
}

export default Enquiry;
