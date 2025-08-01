export default function Projects() {
  const projects = [
    {
      name: 'Image to Text',
      url: 'https://github.com/jetr00/Image-To-Text',
    },
    {
      name: 'Random Password Generator',
      url: 'https://github.com/jetr00/Random-Password-Generator',    
    },
  ];

  return (
    <div style={styles.container}>
      {projects.map((project, index) => (
        <div key={index} style={styles.card}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <button
            style={styles.button}
            onClick={() => window.open(project.url, '_blank')}
          >
            Check it on GitHub
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    justifyContent: 'center',
    opacity: '80%',
  },
  card: {
    backgroundColor: 'black',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    width: '300px',
    textAlign: 'center',
    color: "white",
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
