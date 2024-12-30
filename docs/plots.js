// Load the JSON data
fetch('assets/sweep.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('plots');

        // Iterate over each hyperparameter
        Object.keys(data).forEach(hparam => {
            const hparamValues = data[hparam].hparam;
            const scores = data[hparam].score;

            // Create scatter plot for the current hyperparameter
            const trace = {
                x: hparamValues,
                y: scores,
                mode: 'markers',
                type: 'scatter',
                name: hparam,

                // Placeholder for customization
                marker: {
                    color: '#00bbbb', // Replace with desired color
                    size: 8,       // Marker size
                    symbol: 'circle', // Marker shape
                    opacity: 0.7,
                    line: {
                        color: '00ffff', // Rim (outline) color
                        width: 1        // Rim (outline) width
                    }
                },
            };

            const layout = {
                title: {
                    text: hparam,
                    font: {
                        size: 20,
                    }
                },
                xaxis: { 
                    title: {
                        text: hparam,
                        font: {
                            size: 16          // Font size for the x-axis title
                        }
                    },
                    tickfont: {
                        size: 14          // Font size for x-axis tick labels
                    }
                },
                yaxis: { 
                    title: {
                        text: 'Score',
                        font: {
                            size: 16          // Font size for the y-axis title
                        }
                    },
                    tickfont: {
                        size: 14          // Font size for y-axis tick labels
                    }
                },
                height: 400,
                width: 500,

                // Placeholder for background or other layout styles
                plot_bgcolor: '#061a1a', // Background color of the plot
                paper_bgcolor: '#061a1a', // Background color of the chart container
                font: {
                    color: '#f1f1f1', // Default font color for all text
                    family: 'Arial, sans-serif' // Default font family
                },
            };

            // Create a div for the current plot
            const plotDiv = document.createElement('div');
            plotDiv.classList.add('plot-container');
            container.appendChild(plotDiv);

            // Render the plot
            Plotly.newPlot(plotDiv, [trace], layout);
        });
    })
    .catch(error => console.error('Error loading data:', error));

