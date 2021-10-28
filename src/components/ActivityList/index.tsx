import { SingleActivity } from '../SingleActivity'
import styles from './styles.module.scss'

interface ActivityListProps {
    activityList: Activity[]
    updateTask: (id: number) => void
    removeTask: (id: number) => void
}


interface Activity {
    id: number
    name: string
    isCompleted: boolean
}

export function ActivityList(props: ActivityListProps) {
    return (
        <div className={styles.contentWrapper}>
            <ul>
                <header>
                    <h1>Tasks</h1>
                    <hr />
                </header>

                {props.activityList.map(activity => {
                    return (
                        <li key={activity.id} >
                            <SingleActivity 
                                activity={{
                                    id: activity.id,
                                    name: activity.name,
                                    isCompleted: activity.isCompleted,
                                }}
                                updateTask={props.updateTask} 
                                removeTask={props.removeTask} 
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}