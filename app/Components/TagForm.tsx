

interface CheckboxTagProps {
    name: string;
    value: boolean;
    handleChange: () => void;
    style?: 'regular' | 'special';
    [x: string]: any;
}

const TagForm = ({
    name,
    value,
    handleChange,
    style,
    ...rest
}: CheckboxTagProps) => {
    if(style === 'special'){
        return (
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center ps-3">
            <input   type="checkbox"
                            checked={value}
                            onChange={handleChange} 
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label htmlFor={name} className="py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{name}</label>
        </div>
    </li>
        )

    }else {
        return (
            
                    <label className="inline-flex items-center text-sm">
                        <input
                            type="checkbox"
                            checked={value}
                            onChange={handleChange}
                        />
                        <span className="ml-2">{name}</span>
                    </label> 
        )
    }
    
};

export default TagForm;
