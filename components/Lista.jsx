export default function Lista (props){
	return(
		<div>
			<h1>Lista Exemplo</h1>
				<ul>
					<li>{props.children}</li>
				</ul>
		</div>
	)
}