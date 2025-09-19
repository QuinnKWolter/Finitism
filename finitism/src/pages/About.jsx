import React from 'react';
import HeartIcon from '../components/HeartIcon';

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-8">About Finitism</h1>
      <div className="card bg-base-100 shadow-xl mt-4">
        <div className="card-body">
          <div tabIndex={0} className="collapse collapse-arrow border border-neutral bg-neutral text-neutral-content rounded-box">
            <div className="collapse-title text-2xl font-medium text-center">
              Who?
            </div>
            <div className="collapse-content">
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-center">Me</h2>
                <div className="flex justify-center items-center">
                  <HeartIcon />
                </div>
                <p>I was born at 7:14AM EST on January 24th, 1994. There was a 
                {' '}<a className="underline" href="https://en.wikipedia.org/wiki/1994_North_American_cold_wave" target="_blank" rel="noopener noreferrer">blizzard</a>{' '}
                sweeping North America, with snowfall and chilling temperature records that stand to this day in many cities throughout the US and Canada.</p>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-center">You</h2>
                <p>Regardless of what you may personally believe, you likely accept that 
                    you are currently experiencing what you irrefutably consider "your life". 
                    The sum of every moment, forgetable and phenomenal, from your first 
                    breath until your last. </p>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-center">Us</h2>
                <p>You are not the only person with a story and limited time to write it. 
                    Billions of human beings are at different points in their personal journeys</p>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-center">Them</h2>
                <p>One of the gravest mistakes we make as humans is the drawing up of 
                    overzealous boundaries and barriers. .</p>
              </div>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow border border-neutral bg-neutral text-neutral-content rounded-box mt-4">
            <div className="collapse-title text-2xl font-medium text-center">
              What?
            </div>
            <div className="collapse-content">
            <p>
                Finitism is a philosophy that insists no system—no matter how
                massive or ingrained—is truly infinite or unchangeable. Instead
                of aiming for an all-or-nothing revolution, Finitism encourages
                practical solutions and
                {' '}<a className="underline" href="https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/" target="_blank" rel="noopener noreferrer">steady incremental progress</a>{' '}. 
                By focusing on manageable steps and celebrating each
                tangible gain, we can collectively reshape systems that might
                otherwise feel overwhelming—be it economic injustice, social
                inequality, or ecological crises.
              </p>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Acknowledge Finitude, Embrace Possibility</h2>
                <p>We may be limited beings, but so are life's problems. 
                    Recognizing finite resources and finite lifespans can be a source of motivation, not despair. 
                    Because every structure is finite—no matter how monolithic—collective, consistent effort can reconfigure it. 
                    This principle underscores that humility about human limits pairs naturally with optimism about what can be achieved when individuals align their actions with their professed values.</p>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Embrace Perpetual Incompleteness</h2>
                <p>You're not finished growing until you can no longer act. 
                    Continuous self-improvement is at the heart of Finitism. 
                    If you're still making decisions—whether at 16 or 96—you have room to grow, learn, and refine your perspective. 
                    Identifying biases and weaknesses is an obligation you hold to yourself. 
                    You don't have to fix every flaw, but Finitism pushes you to be conscious of them. 
                    This encourages humility—acknowledging you haven't arrived at a final state of knowledge or virtue. 
                    In a finite life, each day is a chance for progress, no matter how incremental.</p>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Morality Is a Sliding Scale, Not a Binary</h2>
                <p>Finitism rejects absolute moral binaries. 
                    Instead, it sees ethics as a continuum: an action can be less harmful or more beneficial than another. 
                    This recognition of moral "shades of gray" preserves nuance and fosters more productive dialogue—aiming to move outcomes from "bad to less bad," or "good to better," rather than insisting on impossible perfection. 
                    By thinking in relative terms, it becomes clearer how small reforms—improved factory conditions, marginal environmental protections—might not be the ultimate good but are still preferable to doing nothing.</p>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Actions Define You More Than Words</h2>
                <p>Who you are is best shown by what you do. 
                    It's easy to declare values yet act otherwise. 
                    Finitism argues that your genuine beliefs and moral commitments are reflected in your decisions—purchases you make, policies you advocate, daily habits you form. 
                    Even speech is an action. If you claim to support human rights, that act of speech should align with how you spend or vote; otherwise, it's hollow moral posturing. 
                    This tenet also challenges "apathetic morality," where one professes concern without taking real steps to help. To be consistent, your deeds must follow your stated values.</p>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Respect People, Question Ideas</h2>
                <p>People deserve dignity; their ideas deserve scrutiny. 
                    Finitism calls for an environment where individuals are treated with respect—even if their ideas clash with yours. 
                    Ideas, on the other hand, should be open to rigorous debate and potential dismantling if found lacking. 
                    This distinction reduces personal attacks and encourages constructive argumentation. 
                    By dismantling or examining specific claims, we avoid strawmen or mischaracterizations and foster real dialogue that can lead to improved understanding and policy.</p>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Responsibility Grows with Awareness</h2>
                <p>Knowing more means doing more. 
                    The more you learn about injustices, structural issues, or your own biases, the harder it becomes to ignore them. 
                    With knowledge comes a moral and practical obligation to act in ways that align with that understanding—be it adjusting your consumption habits, supporting movements that address inequalities, or speaking up in local governance. 
                    Conversely, willful ignorance is a means of shirking responsibility. Finitism advocates being informed so you can act effectively and ethically.</p>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Incrementalism Is Powerful</h2>
                <p>No step is too small when multiplied by many. 
                    Incremental progress is central to Finitism. 
                    Recognizing that all systems are finite implies they can be changed through sustained, collective effort. 
                    Each small step—buying ethically, writing a letter to your representative, volunteering in your community—adds up. 
                    Rather than waiting for a sweeping revolution or giving in to despair, Finitism teaches that consistent, deliberate actions can create momentum that ultimately shifts societal norms and policies.</p>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Collaboration Over Isolation</h2>
                <p>Problems shrink when tackled together. 
                    Big issues—economic injustice, climate change—feel insurmountable in isolation. 
                    By connecting with others, synergy emerges. Sharing resources, knowledge, and mutual support fosters optimism and accelerates progress. 
                    This principle reinforces the idea that systemic transformation is made feasible by many small actors pushing toward shared goals.</p>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Tolerance Has Its Limits</h2>
                <p>Respect all persons, but do not enable harmful extremism. 
                    Finitism draws on Karl Popper's paradox of tolerance: unlimited tolerance of intolerance can be self-defeating. 
                    While it's crucial to maintain open dialogue, we also have a responsibility to protect others from ideologies that undermine human rights. 
                    Balancing free inquiry with a stance against hate speech or authoritarianism ensures that "respect people" (Tenet #2) does not morph into endorsing harmful behaviors or beliefs.</p>
              </div>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow border border-neutral bg-neutral text-neutral-content rounded-box mt-4">
            <div className="collapse-title text-2xl font-medium text-center">
              Why?
            </div>
            <div className="collapse-content">
              <p>We live in a world facing pressing challenges: deep inequality, a rapidly
                changing climate, rising misinformation, and social or political tensions
                that threaten our sense of shared humanity. These systemic issues aren't
                hypothetical—they affect people's lives every day. That's why Finitism
                exists: to highlight that no matter how monolithic a problem seems, it's
                still finite in scope—and we can tackle it, step by step. If you'd like to
                see the full range of issues we address (from poverty to environmental
                degradation), visit our <strong>Issues</strong> section. There, you'll
                find data, case studies, and insights into why each challenge demands our
                collective attention. Finitism starts with “Why?” because recognizing the
                urgency of these problems is the first step toward building a healthier,
                more equitable future.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow border border-neutral bg-neutral text-neutral-content rounded-box mt-4">
            <div className="collapse-title text-2xl font-medium text-center">
              How?
            </div>
            <div className="collapse-content">
              <p>Even small steps make a difference—change isn't about perfection, but
                about doing better than before. You could adjust your buying habits, lend
                your voice to grassroots campaigns, or volunteer for causes close to your
                heart. Check out our <strong>Activism</strong> page to discover practical
                ways you can get involved right now.
                Take a look at our <strong>Stances</strong> interface to see clearly
                defined positions on key policies and learn how to advocate effectively
                for them, whether by contacting legislators or organizing community
                events. We also maintain a <strong>Charities</strong> section,
                highlighting organizations that are actively making an impact across
                various fronts, so you can direct your time or resources where they can do
                the most good. By taking these actions—no matter how small—you become part
                of a collective that moves society forward.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow border border-neutral bg-neutral text-neutral-content rounded-box mt-4">
            <div className="collapse-title text-2xl font-medium text-center">
              When?
            </div>
            <div className="collapse-content">
              <p>There's no time to wait. Many of these issues have already reached tipping
                points—or are dangerously close. Climate scientists warn we have a short
                window to avert the worst effects of climate change; social injustices can
                fester if not addressed promptly. But here's the good news: change can
                happen surprisingly fast when enough people decide to act in unison. If
                you're unsure where to start, heading to our <strong>Activism</strong> or 
                <strong>Stances</strong> pages can show you immediate steps. Our 
                <strong>Community</strong> page allows you to connect with others also looking to make a
                difference right now. The best time to address these challenges would have
                been years ago; the second-best time is this exact moment. And with the
                right resources and motivation, you might be surprised by how quickly and
                widely new ideas can take root once momentum builds.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow border border-neutral bg-neutral text-neutral-content rounded-box mt-4">
            <div className="collapse-title text-2xl font-medium text-center">
              Where?
            </div>
            <div className="collapse-content">
              <p>Information on where Finitism is practiced and its global reach.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 