export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <h2 className="text-4xl font-bold mb-8 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
                I'm a dedicated Computer Science student with a passion for creating innovative digital solutions. My
                journey in programming started with curiosity and has evolved into a deep love for problem-solving and
                continuous learning.
              </p>
              <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
                With strong foundations in multiple programming languages and a keen interest in Data Structures and
                Algorithms, I enjoy tackling complex challenges and turning ideas into reality through code.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 glass rounded-full text-sm text-primary border border-primary/30">
                  Problem Solver
                </span>
                <span className="px-4 py-2 glass rounded-full text-sm text-secondary border border-secondary/30">
                  Critical Thinker
                </span>
                <span className="px-4 py-2 glass rounded-full text-sm text-primary border border-primary/30">
                  Team Player
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 glass-card rounded-xl flex items-center justify-center">
                <div className="text-6xl text-primary/30">👩‍💻</div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 glass rounded-full flex items-center justify-center glow-pink">
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
