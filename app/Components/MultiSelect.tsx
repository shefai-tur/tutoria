import React from 'react'
import Select from 'react-select';

function MultiSelect({options, values, handleChange}: {options?: any[], values?: {value:string, label:string}[], handleChange: (selectedOptions: any) => void}) {
  return (
    <div>
								{/* @ts-ignore */}
								<Select
									isMulti
									options={options}
									value={values}
									onChange={handleChange}
									className="basic-multi-select"
									classNamePrefix="select"
								/>
							</div>
  )
}

export default MultiSelect