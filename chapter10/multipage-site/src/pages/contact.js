import { useLocation } from "react-router-dom"

export default function Contact() {
  const queryString = useLocation().search
  const queryParans = new URLSearchParams(queryString)
  const name = queryParans.get('name')



  return (
    <div>
      <h2>Hey, {name}. Drop a message, and we'll contact you.</h2>
      <p>Enim nisi nostrud laboris magna et quis aute dolor amet id in amet. 
        Cupidatat aute reprehenderit non sunt eu in dolore aute magna eiusmod magna nisi mollit. 
        Commodo ex quis qui sit proident ad voluptate reprehenderit reprehenderit commodo.</p>
    </div>
  )
}
