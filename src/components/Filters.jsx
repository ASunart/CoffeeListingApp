/* eslint-disable react/prop-types */
import { filters } from "../const/filters";

export function Filters({handleFilterChange, filter}) {

    console.log(`Filter component: ${filter}`);
    return (
        <fieldset className='flex justify-center gap-4'>
            {
                filters.map(({ id, label, value }) => {
                    return (
                        <label key={id}>
                            <input
                                type="radio"
                                id={id}
                                className='hidden peer'
                                value={value}
                                onChange={handleFilterChange}
                                checked={filter === value}
                            />
                            <div className='hover:bg-gray-light px-4 py-2 rounded-lg peer-checked:bg-gray-light'
                            >
                                <p className='font-dm-sans text-white font-medium text-sm'>{label}</p>
                            </div>
                        </label>
                    )
                })
            }

        </fieldset>
    )
}