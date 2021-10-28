import { useState } from 'react'
import styles from './styles.module.scss'

interface HeaderProps {
    addTask: (name: string) => void 
}

export function Header(props: HeaderProps) {
    // state to keep getting the activity name in the form
    const [activityName, setActivityName] = useState('')

    return (
        <div className={styles.headerWrapper}>
            <h1><strong>TODO</strong> LIST</h1>

            <div className={styles.createActivityBoxWrapper}>
                <form>
                    <div className={styles.textInputBox}>
                        <label htmlFor="new-activity">
                            <strong>Create new activity</strong>
                        </label>
                        <input type="text" maxLength="20" name="new-activity" value={activityName} onChange={(e) => {setActivityName(e.target.value)}} />
                    </div>

                    <button onClick={(e) => {
                        e.preventDefault();
                        props.addTask(activityName)
                        setActivityName('')
                    }}>
                        <strong>Add Task</strong>
                    </button>
                </form>
            </div>
        </div>
    )
}