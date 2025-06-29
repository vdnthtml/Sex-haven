'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cpu, Eye, Mic, Film, Brain, Database, Cog, ClipboardList, Download, Link2, Users, Zap, Star, ChevronRight, CheckCircle, BarChart2, Repeat, Dna, Target, LayoutGrid, MessageCircle, Smile, TrendingUp } from 'lucide-react'

export default function Features() {
  return (
    <main className="min-h-screen bg-deep-charcoal">
      <Header />
      {/* Section 1: Hero (Features Overview) */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden bg-deep-charcoal">
        <div className="absolute inset-0 pointer-events-none">
          {/* Optional subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-transparent" />
        </div>
        <div className="relative z-10 container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-pure-white mb-6">
              Engineered for Insights. Built for Virality.
            </h1>
            <p className="text-xl md:text-2xl text-pure-white mb-8">
              Dive deep into Helixar's powerful AI pipeline. Understand how we dissect viral content, extract style DNA, and deliver actionable blueprints for your next breakthrough.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/signup" className="btn-primary text-lg px-8 py-4 group">
                Get Started Free
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link href="#pipeline" className="btn-secondary text-lg px-8 py-4 group">
                See It In Action
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: The AI Pipeline Deep Dive */}
      <section id="pipeline" className="py-28 bg-deep-charcoal">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-6">
              The Intelligence Engine: How Helixar Deconstructs Virality
            </h2>
            <p className="text-xl text-pure-white max-w-3xl mx-auto">
              Behind every viral blueprint is Helixar's proprietary AI pipeline, meticulously engineered to dissect, analyze, and understand content at a level no human—or other tool—can match. We go beyond surface metrics to reveal the true 'why' behind engagement.
            </p>
          </motion.div>

          {/* Pipeline Diagram (simplified for now) */}
          <div className="flex flex-col items-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-8"
            >
              {/* Input Node */}
              <div className="flex flex-col items-center">
                <Link2 className="text-warm-gold mb-2" size={32} />
                <span className="text-pure-white text-sm">Video Link</span>
              </div>
              <ChevronRight className="text-medium-grey mt-4" size={24} />
              {/* AI Stack */}
              <div className="flex flex-col items-center">
                <Mic className="text-warm-gold mb-2" size={32} />
                <span className="text-pure-white text-sm">Whisper</span>
              </div>
              <div className="flex flex-col items-center">
                <Eye className="text-warm-gold mb-2" size={32} />
                <span className="text-pure-white text-sm">YOLOv7</span>
              </div>
              <div className="flex flex-col items-center">
                <Smile className="text-warm-gold mb-2" size={32} />
                <span className="text-pure-white text-sm">FaceNet</span>
              </div>
              <div className="flex flex-col items-center">
                <Film className="text-warm-gold mb-2" size={32} />
                <span className="text-pure-white text-sm">PySceneDetect</span>
              </div>
              <div className="flex flex-col items-center">
                <Brain className="text-warm-gold mb-2" size={32} />
                <span className="text-pure-white text-sm">CLIP & ViT</span>
              </div>
              <ChevronRight className="text-medium-grey mt-4" size={24} />
              {/* Memory Node */}
              <div className="flex flex-col items-center">
                <Database className="text-warm-gold mb-2" size={32} />
                <span className="text-pure-white text-sm">Vector DB</span>
              </div>
              <ChevronRight className="text-medium-grey mt-4" size={24} />
              {/* Thinker Node */}
              <div className="flex flex-col items-center">
                <Cog className="text-warm-gold mb-2" size={32} />
                <span className="text-pure-white text-sm">GPT-4o</span>
              </div>
              <ChevronRight className="text-medium-grey mt-4" size={24} />
              {/* Output Nodes */}
              <div className="flex flex-col items-center">
                <ClipboardList className="text-warm-gold mb-2" size={32} />
                <span className="text-pure-white text-sm">Human Blueprint</span>
              </div>
              <div className="flex flex-col items-center">
                <Download className="text-warm-gold mb-2" size={32} />
                <span className="text-pure-white text-sm">Machine Blueprint</span>
              </div>
            </motion.div>
          </div>

          {/* AI Component Breakdowns */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Whisper */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex items-start space-x-4">
              <Mic className="text-warm-gold flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-pure-white mb-2">Whisper: Precision Transcription & Nuance</h3>
                <p className="text-pure-white mb-1">Leveraging OpenAI's Whisper, we transcribe every word with unparalleled accuracy. This isn't just for captions; it's the foundation for analyzing verbal hooks, pacing, sentiment, and the subtle linguistic patterns that drive engagement.</p>
                <p className="text-warm-gold text-sm font-medium">Unlock the power of spoken word, analyzing every syllable for viral potential.</p>
              </div>
            </motion.div>
            {/* YOLOv7 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="flex items-start space-x-4">
              <Eye className="text-warm-gold flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-pure-white mb-2">YOLOv7: Dynamic Visual Comprehension</h3>
                <p className="text-pure-white mb-1">Our integration with YOLOv7 allows us to identify key objects, actions, and scene compositions in real-time. This reveals visual hooks, scene changes, and how creators leverage visual cues to captivate viewers.</p>
                <p className="text-warm-gold text-sm font-medium">Understand visual pacing and what truly captures attention on screen.</p>
              </div>
            </motion.div>
            {/* FaceNet & PySceneDetect */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="flex items-start space-x-4">
              <Smile className="text-warm-gold flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-pure-white mb-2">FaceNet & PySceneDetect: Emotional & Structural Mapping</h3>
                <p className="text-pure-white mb-1">We analyze facial expressions for emotional shifts (FaceNet) and pinpoint exact scene changes (PySceneDetect). This maps the emotional journey of the video and dissects its structural pacing, crucial for maintaining viewer engagement.</p>
                <p className="text-warm-gold text-sm font-medium">Map the emotional pulse and structural backbone of any viral video.</p>
              </div>
            </motion.div>
            {/* CLIP & ViT */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="flex items-start space-x-4">
              <Brain className="text-warm-gold flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-pure-white mb-2">CLIP & ViT: Conceptual & Style DNA</h3>
                <p className="text-pure-white mb-1">Our use of CLIP and Vision Transformers allows Helixar to understand the conceptual content of visuals and text, going beyond mere object recognition. This is critical for extracting the unique 'style DNA' of any creator—their aesthetic, humor, and unique narrative voice.</p>
                <p className="text-warm-gold text-sm font-medium">Deconstruct the 'style DNA' of top creators for precise replication and innovation.</p>
              </div>
            </motion.div>
            {/* Vector DB */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="flex items-start space-x-4">
              <Database className="text-warm-gold flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-pure-white mb-2">Vector DB: Creator Style Memory</h3>
                <p className="text-pure-white mb-1">All extracted 'style DNA' and contextual insights are stored in a high-performance Vector Database. This builds a rich, evolving memory of each creator's unique viral signature, enabling future blueprint generation 'in their voice.'</p>
                <p className="text-warm-gold text-sm font-medium">Helixar remembers and applies your unique viral signature consistently.</p>
              </div>
            </motion.div>
            {/* GPT-4o */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }} className="flex items-start space-x-4">
              <Cog className="text-warm-gold flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-pure-white mb-2">GPT-4o: The Viral Blueprint Thinker</h3>
                <p className="text-pure-white mb-1">This is Helixar's 'Content Brain.' Leveraging GPT-4o, we synthesize all multi-modal analysis into two powerful outputs: the editable Human Blueprint and the automated Machine Blueprint. This translates raw data into actionable, strategic recommendations for hooks, pacing, and CTAs.</p>
                <p className="text-warm-gold text-sm font-medium">Transform raw data into a precise, actionable blueprint for viral content.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Insight Studio Showcase */}
      <section className="py-28 bg-gray-900/50">
        <div className="container-max section-padding">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-6">
              Your Viral Blueprint: Intelligent Strategy, Seamless Execution
            </h2>
            <p className="text-xl text-pure-white max-w-3xl mx-auto">
              Helixar synthesizes complex AI analysis into two powerful, actionable outputs. Whether you're refining your own strategy or automating video generation, your viral blueprint is designed for immediate impact.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Human Blueprint */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">The Human Blueprint: Your Editable Viral Strategy</h3>
              <p className="text-pure-white mb-4">Gain a deep, editable understanding of <em>why</em> content performs. Our Human Blueprint provides clear, segment-by-segment analysis of hooks, pacing, CTAs, and emotional arcs—all within an intuitive interface you can refine and export. Perfect for content strategists, creative directors, and creators who demand precision.</p>
              <div className="bg-deep-charcoal rounded-lg p-6 border border-gray-700 mt-4">
                {/* Mockup Placeholder */}
                <div className="h-40 flex flex-col justify-center items-center">
                  <ClipboardList className="text-warm-gold mb-2" size={40} />
                  <span className="text-medium-grey">Editable timeline, segment insights, AI suggestions...</span>
                </div>
              </div>
            </motion.div>
            {/* Machine Blueprint */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">The Machine Blueprint: Automated Execution</h3>
              <p className="text-pure-white mb-4">For rapid production, our Machine Blueprint translates strategic insights into precise, step-by-step video instructions. This output is optimized for seamless integration with leading video generation tools (like HeyGen, Runway, Remotion), enabling you to automate content creation with unprecedented accuracy and speed.</p>
              <div className="bg-deep-charcoal rounded-lg p-6 border border-gray-700 mt-4">
                {/* Mockup Placeholder */}
                <div className="h-40 flex flex-col justify-center items-center">
                  <Download className="text-warm-gold mb-2" size={40} />
                  <span className="text-medium-grey">Step-by-step instructions, export, integrations...</span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="text-center mt-12">
            <Link href="/signup" className="btn-primary text-lg px-8 py-4 group">
              Try the Free Tier
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Comparison / Differentiators */}
      <section className="py-28 bg-deep-charcoal">
        <div className="container-max section-padding">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-6">
              Helixar: Beyond the Basics
            </h2>
            <p className="text-xl text-pure-white max-w-3xl mx-auto">
              In a crowded landscape of video tools, Helixar stands apart. We built an AI that understands viral content, not just generates it. See how our intelligence engine delivers what others can't:
            </p>
          </motion.div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-gray-700 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-900">
                  <th className="px-6 py-4 text-pure-white font-semibold">Feature/Focus Area</th>
                  <th className="px-6 py-4 text-pure-white font-semibold">Others</th>
                  <th className="px-6 py-4 text-warm-gold font-semibold">Helixar</th>
                </tr>
              </thead>
              <tbody className="text-pure-white">
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">Core Purpose</td>
                  <td className="px-6 py-4">Video clipping, text-to-video, avatar generation, basic editing</td>
                  <td className="px-6 py-4">Viral video deconstruction, insight generation, strategic content blueprinting</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">"Understanding" Level</td>
                  <td className="px-6 py-4">Superficial analysis (basic transcription, object recognition)</td>
                  <td className="px-6 py-4">Deep multi-modal AI (Whisper, YOLOv7, CLIP, FaceNet) for nuanced understanding of pacing, hooks, emotions, style DNA</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">Output</td>
                  <td className="px-6 py-4">Edited clips, generated videos with avatars, basic captions</td>
                  <td className="px-6 py-4">Human Blueprint (editable strategic insights), Machine Blueprint (precise video generation instructions), Style DNA profiles</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">Focus</td>
                  <td className="px-6 py-4">Efficiency in creation, basic automation</td>
                  <td className="px-6 py-4">Virality science, strategic growth, predictable success, actionable insights</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">Personalization/Style</td>
                  <td className="px-6 py-4">Generic templates, basic voice/avatar choices</td>
                  <td className="px-6 py-4">Full vector memory for creator style, generates content "in the voice of" any creator</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">Value Proposition</td>
                  <td className="px-6 py-4">"Save time on video creation."</td>
                  <td className="px-6 py-4">"Transform your content strategy from guesswork to data-backed viral success."</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 5: Feature Gallery / Specs */}
      <section className="py-28 bg-gray-900/50">
        <div className="container-max section-padding">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-6">
              Every Feature, Engineered for Your Success
            </h2>
            <p className="text-xl text-pure-white max-w-3xl mx-auto">
              Explore the powerful features that make Helixar the ultimate AI intelligence engine for content strategy. From multi-modal analysis to seamless output, every capability is designed for precision and impact.
            </p>
          </motion.div>
          {/* Feature Categories */}
          <div className="space-y-16">
            {/* Category 1: Core AI Analysis */}
            <div>
              <h3 className="text-2xl font-bold text-pure-white mb-4 flex items-center"><Cpu className="text-warm-gold mr-2" size={28} /> Core AI Analysis</h3>
              <p className="text-pure-white mb-8">The engine behind Helixar's intelligence, dissecting content from every angle.</p>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Multi-Modal Ingestion */}
                <div className="card flex flex-col items-center text-center">
                  <LayoutGrid className="text-warm-gold mb-2" size={32} />
                  <h4 className="font-semibold text-pure-white mb-2">Multi-Modal Ingestion</h4>
                  <p className="text-medium-grey text-sm">Supports ingestion of public video links (YouTube, TikTok, Instagram) for comprehensive analysis across video, audio, and text.</p>
                </div>
                {/* Advanced Transcription (Whisper) */}
                <div className="card flex flex-col items-center text-center">
                  <Mic className="text-warm-gold mb-2" size={32} />
                  <h4 className="font-semibold text-pure-white mb-2">Advanced Transcription (Whisper)</h4>
                  <p className="text-medium-grey text-sm">Utilizes OpenAI's Whisper for industry-leading accuracy in transcribing spoken word, capturing nuances vital for engagement analysis.</p>
                </div>
                {/* Visual Object & Action Detection (YOLOv7) */}
                <div className="card flex flex-col items-center text-center">
                  <Target className="text-warm-gold mb-2" size={32} />
                  <h4 className="font-semibold text-pure-white mb-2">Visual Object & Action Detection (YOLOv7)</h4>
                  <p className="text-medium-grey text-sm">Identifies key objects, actions, and scene compositions within videos to understand visual cues and pacing shifts.</p>
                </div>
                {/* Emotional Arc Mapping (FaceNet) */}
                <div className="card flex flex-col items-center text-center">
                  <Smile className="text-warm-gold mb-2" size={32} />
                  <h4 className="font-semibold text-pure-white mb-2">Emotional Arc Mapping (FaceNet)</h4>
                  <p className="text-medium-grey text-sm">Analyzes facial expressions to map the emotional journey of the video, crucial for understanding viewer connection.</p>
                </div>
                {/* Structural Pacing Analysis (PySceneDetect) */}
                <div className="card flex flex-col items-center text-center">
                  <Film className="text-warm-gold mb-2" size={32} />
                  <h4 className="font-semibold text-pure-white mb-2">Structural Pacing Analysis (PySceneDetect)</h4>
                  <p className="text-medium-grey text-sm">Precisely detects scene changes to analyze video structure, pacing, and how it impacts retention.</p>
                </div>
                {/* Conceptual Understanding (CLIP & ViT) */}
                <div className="card flex flex-col items-center text-center">
                  <Brain className="text-warm-gold mb-2" size={32} />
                  <h4 className="font-semibold text-pure-white mb-2">Conceptual Understanding (CLIP & ViT)</h4>
                  <p className="text-medium-grey text-sm">Goes beyond recognition to understand the conceptual content and subtle stylistic elements of visuals and text.</p>
                </div>
              </div>
            </div>
            {/* Category 2: Insight Generation & Strategy */}
            <div>
              <h3 className="text-2xl font-bold text-pure-white mb-4 flex items-center"><BarChart2 className="text-warm-gold mr-2" size={28} /> Insight Generation & Strategy</h3>
              <p className="text-pure-white mb-8">Translating raw data into actionable intelligence for your content strategy.</p>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Style DNA Extraction */}
                <div className="card flex flex-col items-center text-center">
                  <Dna className="text-warm-gold mb-2" size={32} />
                  <h4 className="font-semibold text-pure-white mb-2">Style DNA Extraction</h4>
                  <p className="text-medium-grey text-sm">Isolates and profiles the unique "style DNA" (pacing, humor, narrative voice, visual aesthetic) of any creator or video.</p>
                </div>
                {/* Viral Pattern Deconstruction */}
                <div className="card flex flex-col items-center text-center">
                  <Target className="text-warm-gold mb-2" size={32} />
                  <h4 className="font-semibold text-pure-white mb-2">Viral Pattern Deconstruction</h4>
                  <p className="text-medium-grey text-sm">Identifies the precise elements (hooks, CTAs, emotional triggers) that contribute to a video's virality.</p>
                </div>
                {/* Human Blueprint Generation */}
                <div className="card flex flex-col items-center text-center">
                  <ClipboardList className="text-warm-gold mb-2" size={32} />
                  <h4 className="font-semibold text-pure-white mb-2">Human Blueprint Generation</h4>
                  <p className="text-medium-grey text-sm">Generates an editable, strategic guide with segment-by-segment analysis and recommendations for content improvement.</p>
                </div>
                {/* Actionable Insights Dashboard */}
                <div className="card flex flex-col items-center text-center">
                  <LayoutGrid className="text-warm-gold mb-2" size={32} />
                  <h4 className="font-semibold text-pure-white mb-2">Actionable Insights Dashboard</h4>
                  <p className="text-medium-grey text-sm">Provides an intuitive interface to visualize key insights, trends, and performance predictions.</p>
                </div>
              </div>
            </div>
            {/* Category 3: Output & Integration */}
            <div>
              <h3 className="text-2xl font-bold text-pure-white mb-4 flex items-center"><Zap className="text-warm-gold mr-2" size={28} /> Output & Integration</h3>
              <p className="text-pure-white mb-8">Seamlessly integrate Helixar's intelligence into your workflow.</p>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Machine Blueprint Generation */}
                <div className="card flex flex-col items-center text-center">
                  <Download className="text-warm-gold mb-2" size={32} />
                  <h4 className="font-semibold text-pure-white mb-2">Machine Blueprint Generation</h4>
                  <p className="text-medium-grey text-sm">Creates precise, step-by-step video instructions optimized for automation and integration with third-party tools.</p>
                </div>
                {/* Third-Party Video Platform Integration */}
                <div className="card flex flex-col items-center text-center">
                  <Link2 className="text-warm-gold mb-2" size={32} />
                  <h4 className="font-semibold text-pure-white mb-2">Third-Party Video Platform Integration</h4>
                  <p className="text-medium-grey text-sm">Output optimized for direct use with leading video generation platforms like HeyGen, Runway, and Remotion.</p>
                </div>
                {/* Exportable Insights */}
                <div className="card flex flex-col items-center text-center">
                  <Download className="text-warm-gold mb-2" size={32} />
                  <h4 className="font-semibold text-pure-white mb-2">Exportable Insights</h4>
                  <p className="text-medium-grey text-sm">Export insights, blueprints, and data for use in presentations, reports, or further analysis.</p>
                </div>
                {/* Continuous Feedback Loop */}
                <div className="card flex flex-col items-center text-center">
                  <Repeat className="text-warm-gold mb-2" size={32} />
                  <h4 className="font-semibold text-pure-white mb-2">Continuous Feedback Loop <span className="text-xs text-warm-gold">(Coming Soon)</span></h4>
                  <p className="text-medium-grey text-sm">Performance data from generated content can feed back into Helixar to refine future recommendations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Call to Action (CTA to Pricing / Try Now) */}
      <section className="py-28 bg-deep-charcoal">
        <div className="container-max section-padding text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-6">
              Ready to Engineer Your Viral Success?
            </h2>
            <p className="text-xl text-pure-white mb-8">
              With Helixar's advanced AI, the guesswork is gone. The path to viral content is clear.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="btn-primary text-lg px-8 py-4 group">
                Get Started Free
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link href="/pricing" className="btn-secondary text-lg px-8 py-4">
                View Pricing Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
} 