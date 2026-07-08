import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { SCROLL_VIEWPORT, usePremiumMotion, type MotionSide } from "../../lib/motionPresets";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  withBlur?: boolean;
};

export function FadeUp({ children, className, delay = 0, withBlur = false, ...rest }: RevealProps) {
  const { fadeUp } = usePremiumMotion();
  return (
    <motion.div
      variants={fadeUp(delay, withBlur)}
      initial="hidden"
      whileInView="visible"
      viewport={SCROLL_VIEWPORT}
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
  ...rest
}: RevealProps & { side?: MotionSide }) {
  const { splitText } = usePremiumMotion();
  return (
    <motion.div
      variants={splitText(side, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={SCROLL_VIEWPORT}
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
  ...rest
}: RevealProps & { side?: MotionSide }) {
  const { splitImage } = usePremiumMotion();
  return (
    <motion.div
      variants={splitImage(side, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={SCROLL_VIEWPORT}
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
  ...rest
}: RevealProps & { innerClassName?: string }) {
  const { imageRevealWrapper, imageRevealInner } = usePremiumMotion();
  return (
    <motion.div
      variants={imageRevealWrapper(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={SCROLL_VIEWPORT}
      className={["overflow-hidden", className].filter(Boolean).join(" ")}
      {...rest}
    >
      <motion.div variants={imageRevealInner(delay + 0.05)} className={["relative h-full w-full", innerClassName].filter(Boolean).join(" ")}>
        {children}
      </motion.div>
    </motion.div>
  );
}

export function SoftScale({ children, className, delay = 0, ...rest }: RevealProps) {
  const { softScale } = usePremiumMotion();
  return (
    <motion.div
      variants={softScale(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={SCROLL_VIEWPORT}
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
  ...rest
}: RevealProps & { stagger?: number }) {
  const { staggerContainer } = usePremiumMotion();
  return (
    <motion.div
      variants={staggerContainer(stagger)}
      initial="hidden"
      whileInView="show"
      viewport={SCROLL_VIEWPORT}
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
