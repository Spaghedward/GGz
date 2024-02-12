const likeButtons = document.querySelectorAll('.likeButton');

likeButtons.forEach(likeButton => {
    likeButton.addEventListener('click', async () => {
        try {
            const gameId = likeButton.closest('.card').dataset.gameid;

            const response = await fetch(`http://localhost:3001/api/like/${gameId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}),
            });

            if (response.ok) {

                console.log('Game liked successfully!');

            } else {

                console.error(); (error)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});


