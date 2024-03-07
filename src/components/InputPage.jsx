import React from 'react'

{/* Students name
Fathers name
roll number
Programme Name
Department
Branch
Mobile number
Email id
Address with pin code
Aadhar ID
*/}
export default function InputPage() {
    return (
            <form>
            <div className='InputPage-main'>
            <label htmlFor="studentName"  className='InputPage-Labels'>Student's name:</label>
            <input type="text" id='studentName' autoFocus className="InputPage-field" placeholder='Student name'/>
            <label htmlFor="fatherName" className='InputPage-Labels'>Father's name:</label>
            <input type="text" id='fatherName' className="InputPage-field" placeholder='Father name'/>
            <label htmlFor="rollNumber" className='InputPage-Labels'>Roll number:</label>
            <input type="text" id='rollNumber' className="InputPage-field" placeholder='Roll number'/>
            <label htmlFor="programmeName" className='InputPage-Labels'>Programme name:</label>
            <input type="text" id='programmeName' className="InputPage-field" placeholder='Programme name'/>
            <label htmlFor="department" className='InputPage-Labels'>Department:</label>
            <input type="text" id='department' className="InputPage-field" placeholder='Department'/>
            <label htmlFor="branch" className='InputPage-Labels'>Branch:</label>
            <input type="text" id='branch' className="InputPage-field" placeholder='Branch name'/>
            <label htmlFor="mobileNumber" className='InputPage-Labels'>Mobile number:</label>
            <input type="tel" id='mobileNumber' className="InputPage-field" placeholder='Mobile number'/>
            <label htmlFor="emailId" className='InputPage-Labels'>Email Id:</label>
            <input type="email" id='emailId' className="InputPage-field" placeholder='Email id'/>
            <label htmlFor="address" className='InputPage-Labels'>Address:</label>
            <input type="text" id='address' className="InputPage-field" placeholder='Address'/>
            <label htmlFor="aadhar" className='InputPage-Labels'>Aadhar number:</label>
            <input type="text" id='aadhar' className="InputPage-field" placeholder='Aadhar number'/>
            </div>
            <button type='submit' className="submitButton">Submit</button>
            </form>
    )
}
