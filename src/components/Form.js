import { useFormik } from 'formik'
import * as Yup from 'yup'

function Form() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      lastName: '',
      password: '',
      select: '',
      checked: []
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
                .min(2, 'Must be 2 character or more')
                .required('Required from Yup!'),
      lastName: Yup.string()
                .min(2, 'Must be 2 character or more')
                .required('Required from Yup!'),
      email: Yup.string()
            .email('Invalid Email Address')
            .required('Required from Yup!'),
      password: Yup.string()
                .min(8, 'Must be 8 character or more')
                .required('Required from Yup!'),
      select: Yup.string()
                .oneOf(
                  ['Nepal', 'India', 'China'],
                  'Must select a value'
                )
                .required('Required from Yup!'),
      checked: Yup.array()
                  .min(2, 'Must select at least 2 hobbies')
    }),
    onSubmit: values => {
        alert('Your Form is Submitted Successfully.')
        console.log(values)
    },
  })
  const handleReset = (resetForm) => {
    document.getElementsByName('checked')[0].checked = false
    document.getElementsByName('checked')[1].checked = false
    document.getElementsByName('checked')[2].checked = false
    document.getElementsByName('checked')[3].checked = false
    resetForm()
  }
  return (
    <form onSubmit={formik.handleSubmit}>
        <fieldset>
            <legend><h2>Registration Form</h2></legend>
            <input type="text" id='firstName' placeholder="First Name" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            &nbsp;&nbsp;{(formik.touched.firstName && formik.errors.firstName) ? ( <div className="error">{ formik.errors.firstName} </div> ) : null}<br />

            <input type="text" id='lastName' placeholder="Last Name" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            &nbsp;&nbsp;{(formik.touched.lastName && formik.errors.lastName) ? ( <div className="error">{ formik.errors.lastName} </div> ) : null}<br />

            <input type="email" id='email' placeholder="Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            &nbsp;&nbsp;{(formik.touched.email && formik.errors.email) ? ( <div className="error">{ formik.errors.email} </div> ) : null}<br />
            
            <input type="password" id='password' placeholder="Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            &nbsp;&nbsp;{(formik.touched.password && formik.errors.password) ? ( <div className="error">{ formik.errors.password} </div> ) : null}<br />

            <select value={formik.values.select} id='select' onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value={"country"}>Select Country</option>
                <option value={"Nepal"}>Nepal</option>
                <option value={"India"}>India</option>
                <option value={"China"}>China</option>
            </select>
            &nbsp;&nbsp;{(formik.touched.select && formik.errors.select) ? ( <div className="error">{ formik.errors.select} </div> ) : null}<br /><br />
            
            <label>Hobbies:</label><br />
            <input type={"checkbox"} name="checked" value="Watching YouTube" onChange={formik.handleChange} onBlur={formik.handleBlur} /> Watching YouTube<br />
            <input type={"checkbox"} name="checked" value="Singing" onChange={formik.handleChange} onBlur={formik.handleBlur} /> Singing<br />
            <input type={"checkbox"} name="checked" value="Dancing" onChange={formik.handleChange} onBlur={formik.handleBlur} /> Dancing<br />
            <input type={"checkbox"} name="checked" value="Playing" onChange={formik.handleChange} onBlur={formik.handleBlur} /> Playing<br />
            {(formik.touched.checked && formik.errors.checked) ? ( <div className="error">{ formik.errors.checked} </div> ) : null}<br /><br />

            <button type='submit' className='btn sub'>Submit</button>&nbsp;&nbsp;
            <button onClick={handleReset.bind(null, formik.handleReset)} className='btn res'>Reset</button>
        </fieldset>
    </form>
  )
}

export default Form