
export default function User({ params }: { params: { user: string }}) {

    return (<div>User {params.user}</div>);
}