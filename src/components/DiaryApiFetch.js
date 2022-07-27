import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DiaryApiFetch = () => {
	const [diarys, setDiarys] = useState([]);

	useEffect(() => {
		axios.get('https://nanahiryu.com/blog_api/diary/').then(res => {
			setDiarys(res.data);
		})
	}, []);
	return (
		<>
			<h1>Diary List</h1>
			<ul>
				{diarys.map(diary => {
					return (
						<li key={diary.id}>
							<div>
								<h2>{diary.title}</h2>
								<p>{diary.subtitle}</p>
								<p>{diary.created_at}</p>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
}
