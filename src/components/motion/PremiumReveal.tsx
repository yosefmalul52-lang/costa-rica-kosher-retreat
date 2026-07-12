import React from "react";
import { motion, useInView, type HTMLMotionProps } from "motion/react";
import { SCROLL_VIEWPORT, usePremiumMotion, type MotionSide } from "../../lib/motionPresets";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  withBlur?: boolean;
  /** When true, animate in immediately (no wait for scroll into view). */
  eager?: boolean;
};

function useRevealInView(eager = false) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, SCROLL_VIEWPORT);
  return { ref, isInView: eager || isInView };
}

export function FadeUp({ children, className, delay = 0, withBlur = false, eager = false, ...rest }: RevealProps) {
  const { fadeUp } = usePremiumMotion();
  const { ref, isInView } = useRevealInView(eager);
  return (
    <motion.div
      ref={ref}
      variants={fadeUp(delay, withBlur)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function SplitText({
  children,
  className,
  side = "start",
  delay = 0,
  eager = false,
  ...rest
}: RevealProps & { side?: MotionSide }) {
  const { splitText } = usePremiumMotion();
  const { ref, isInView } = useRevealInView(eager);
  return (
    <motion.div
      ref={ref}
      variants={splitText(side, delay)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function SplitImage({
  children,
  className,
  side = "end",
  delay = 0,
  eager = false,
  ...rest
}: RevealProps & { side?: MotionSide }) {
  const { splitImage } = usePremiumMotion();
  const { ref, isInView } = useRevealInView(eager);
  return (
    <motion.div
      ref={ref}
      variants={splitImage(side, delay)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({
  children,
  className,
  innerClassName,
  delay = 0,
  eager = false,
  ...rest
}: RevealProps & { innerClassName?: string }) {
  const { imageRevealWrapper, imageRevealInner } = usePremiumMotion();
  const { ref, isInView } = useRevealInView(eager);
  return (
    <motion.div
      ref={ref}
      variants={imageRevealWrapper(delay)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={["overflow-hidden", className].filter(Boolean).join(" ")}
      {...rest}
    >
      <motion.div variants={imageRevealInner(delay + 0.05)} className={["relative h-full w-full", innerClassName].filter(Boolean).join(" ")}>
        {children}
      </motion.div>
    </motion.div>
  );
}

export function SoftScale({ children, className, delay = 0, eager = false, ...rest }: RevealProps) {
  const { softScale } = usePremiumMotion();
  const { ref, isInView } = useRevealInView(eager);
  return (
    <motion.div
      ref={ref}
      variants={softScale(delay)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.12,
  eager = false,
  ...rest
}: RevealProps & { stagger?: number }) {
  const { staggerContainer } = usePremiumMotion();
  const { ref, isInView } = useRevealInView(eager);
  return (
    <motion.div
      ref={ref}
      variants={staggerContainer(stagger)}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, ...rest }: HTMLMotionProps<"div">) {
  const { staggerItem } = usePremiumMotion();
  return (
    <motion.div variants={staggerItem()} className={className} {...rest}>
      {children}
    </motion.div>
  );
}
