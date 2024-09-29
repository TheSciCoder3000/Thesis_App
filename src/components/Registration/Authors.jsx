import { useEffect, useState } from "react"

function AuthorField({ onUpdateField, onFieldRemove, indx }) {


    return (
        <div className="field-container">
            <div className="label-container flex">
                <label htmlFor="author-1">Author {indx + 1}</label>

                {indx != 0 &&
                    <button type="button" onClick={onFieldRemove} className="remove-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                    </button>
                }
            </div>
            <div className="flex">
                <input required className="full" type="text" name="author-1-last" id="author-1-last"
                    placeholder="Last Name" onChange={e => onUpdateField({ "last": e.target.value })} />
                <input required className="full" type="text" name="author-1-first" id="author-1-first"
                    placeholder="First Name" onChange={e => onUpdateField({ "first": e.target.value })} />
                <input required className="full" type="text" name="author-1-middle" id="author-1-middle"
                    placeholder="Middle Name" onChange={e => onUpdateField({ "middle": e.target.value })} />
            </div>
        </div>
    )
}

const initialAuthorValue = {
    "last": null,
    "first": null,
    "middle": null
}

function Authors({ className, onUpdateField }) {
    const [authorList, setAuthorList] = useState([initialAuthorValue]);

    useEffect(() => {
        onUpdateField({ "authors": authorList })
    }, [authorList])

    const updateAuthorList = (indx, newValue) => setAuthorList(listState => {
        return listState.map((currValue, listIndx) => {
            if (listIndx === indx) return { ...currValue, ...newValue };
            return currValue;
        })
    })

    const addAuthors = () => setAuthorList(authorState => {
        if (authorState.length >= 4) return authorState;
        return [...authorState, initialAuthorValue];
    });

    const removeAuthor = (indx) => setAuthorList(authorState => authorState.filter((_, authorIndx) => authorIndx != indx))

    return (
        <div className={`category-container ${className}`}>
            <div className="category-header">
                <h2>Authors</h2>
                <p>Enter the owners/authors of the thesis</p>
            </div>
            <div className="list-actions">
                <button type="button" className="add-btn" onClick={addAuthors}>+</button>
            </div>
            {authorList.map((_, indx) => (
                <AuthorField key={indx} indx={indx} onUpdateField={(value) => updateAuthorList(indx, value)} onFieldRemove={() => removeAuthor(indx)} />
            ))}
        </div>

    )
}

export default Authors