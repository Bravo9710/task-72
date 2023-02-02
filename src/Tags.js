import React from 'react'

function Tags({
	tags=[]
}) {


	return (
		<div className="tags">
			{tags.map(function (tag) {
				return <p key={tag} className="tag">#{tag}</p>
			})}
		</div>
	)
}

export default Tags
