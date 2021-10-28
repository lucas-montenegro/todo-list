import { Fragment, useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { ActivityList } from '../components/ActivityList'

interface Activity {
    id: number
    name: string
    isCompleted: boolean
}

export function HomePage() {
    // state to handle all the activities
    const [activities, setActivities] = useState<Activity[]>([])

    // function to add a task in the task list 
    function addTask(name: string) { 
        console.log(name)
        // check if the name is not null and then add it to the task list
        if (!!name) { 
            setActivities([...activities, 
                { 
                  id: Date.now(), 
                  name: name, 
                  isCompleted: false 
                }
            ])
        }
    }

    // function to update a task in the task list 
    function updateTask(id: number) { 
        // finding the activity to update based on its id 
        const activityToUpdate = activities.findIndex(activity => {
            return activity.id === id
        }) 

        // changes the isCompleted property based on its value (changes true to false and vice versa)
        const updatedCompletedState = activities[activityToUpdate].isCompleted ? false : true

        // updating the individual activity 
        activities[activityToUpdate].isCompleted = updatedCompletedState 
        
        // updating the state
        setActivities([...activities])
    }

    // function to remove a task in the task list 
    function removeTask(id: number) { 
        // filtering the list removing a task by giving a specific id
        const updatedActivities = activities.filter(activity => {
            return activity.id !== id
        }) 

        // updating the state
        setActivities(updatedActivities)
    }

    return (
        <Fragment>
            < Header addTask={addTask} />
            < ActivityList activityList={activities} updateTask={updateTask} removeTask={removeTask} />
        </Fragment>
    )
}