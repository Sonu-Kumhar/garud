export default function ProjectCard({ project }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
      <p>{project.description}</p>
    </div>
  )
}
