"use client";
import { motion, useScroll } from "motion/react";
import React from "react";

export default function ScrollProgressIndicator() {
    const { scrollYProgress } = useScroll();

    return (
        <div>
            <div className="fixed top-0 left-0 right-0 w-full h-2 bg-gray-300">
                <motion.div
                    className="bg-amber-600 h-full absolute left-0 w-full"
                    style={{
                        scaleX: scrollYProgress,
                        transformOrigin: "left",
                    }}
                ></motion.div>
            </div>
            <LongArticle />
        </div>
    );
}

function LongArticle() {
    return (
        <div className="prose prose-lg max-w-4xl mx-auto p-8 [&_p]:mb-6">
            <h1 className="text-4xl font-bold mb-4">The War of the Roses</h1>
            <h2 className="text-2xl font-semibold mb-6">
                A Turbulent Struggle for the English Throne
            </h2>

            <section>
                <h3 className="text-xl font-semibold mt-8 mb-2">
                    Origins of the Conflict
                </h3>
                <p>
                    The War of the Roses was a series of civil wars fought in
                    England during the 15th century between two rival branches
                    of the royal House of Plantagenet: the House of Lancaster
                    and the House of York. These wars were named after the
                    emblems of the two houses—the red rose for Lancaster and the
                    white rose for York.
                </p>
                <p>
                    Tensions leading to the conflict were rooted in the
                    aftermath of the Hundred Years’ War and the weak rule of
                    King Henry VI. His mental instability and ineffective
                    governance opened the door for competing claims to the
                    throne.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-semibold mt-8 mb-2">
                    The Rival Houses
                </h3>
                <p>
                    The Lancasters descended from John of Gaunt, a son of Edward
                    III, while the Yorkists were descended from Edmund of
                    Langley, another of Edward’s sons. Both houses believed they
                    had a legitimate claim to the throne, which created a
                    fertile ground for conflict.
                </p>
                <p>
                    As support for Henry VI waned, Richard, Duke of York,
                    emerged as a strong challenger. This rivalry would ignite a
                    series of battles that spanned over three decades.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-semibold mt-8 mb-2">
                    Key Battles and Turning Points
                </h3>
                <p>
                    Some of the most notable battles of the War of the Roses
                    include the Battle of St Albans (1455), the Battle of Towton
                    (1461), and the Battle of Bosworth Field (1485). Towton was
                    especially bloody, considered one of the largest and
                    deadliest battles fought on English soil.
                </p>
                <p>
                    The Battle of Bosworth Field marked the decisive end of the
                    conflict, where Henry Tudor defeated Richard III, bringing
                    the Yorkist reign to an end.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-semibold mt-8 mb-2">
                    Rise of the Tudors
                </h3>
                <p>
                    Henry Tudor, a distant Lancastrian claimant, seized the
                    opportunity to unite the warring factions by marrying
                    Elizabeth of York. This strategic marriage symbolized the
                    union of the two houses and gave rise to the Tudor dynasty.
                </p>
                <p>
                    As Henry VII, he established a strong central government and
                    took steps to prevent future dynastic disputes, laying the
                    foundation for the modern English monarchy.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-semibold mt-8 mb-2">
                    Political and Social Impact
                </h3>
                <p>
                    The prolonged war had a significant impact on English
                    society. It weakened the traditional feudal nobility,
                    leading to a shift in power toward the monarchy and the
                    emerging gentry class.
                </p>
                <p>
                    Additionally, the conflict left the country economically
                    strained, though it also set the stage for the more stable
                    and prosperous Tudor era.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-semibold mt-8 mb-2">
                    Cultural Legacy
                </h3>
                <p>
                    The War of the Roses has inspired countless works of
                    literature and drama, most notably William
                    Shakespeare&apos;s historical plays such as &ldquo;Henry
                    VI&rdquo; and &ldquo;Richard III.&rdquo;
                </p>
                <p>
                    These stories continue to shape public perception of the
                    period, portraying it as a time of betrayal, ambition, and
                    the tragic costs of civil war.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-semibold mt-8 mb-2">
                    Historical Interpretations
                </h3>
                <p>
                    Historians have debated the causes and consequences of the
                    War of the Roses for centuries. While traditionally viewed
                    as a dynastic power struggle, more recent interpretations
                    emphasize the roles of weak governance, economic distress,
                    and shifting social structures.
                </p>
                <p>
                    These wars are now seen not just as noble feuds but as a
                    reflection of broader societal change in late medieval
                    England.
                </p>
            </section>
        </div>
    );
}
